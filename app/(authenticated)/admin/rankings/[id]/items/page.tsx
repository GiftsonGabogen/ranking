"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Edit,
  Trash2,
  ArrowLeft,
  GripVertical,
  MoveUp,
  MoveDown,
  Eye
} from "lucide-react";
import { ItemForm } from "@/components/admin/ItemForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { type ItemFormData } from "@/lib/schemas/item";
import { useAdminItems } from "../../../_components/useAdminItems";
import { useSession } from "@/lib/auth-client";
import { AdminProtection } from "@/components/admin/shared/AdminProtection";
import { PageError } from "@/components/admin/shared/PageError";
import { PageLoading } from "@/components/admin/shared/PageLoading";
import { ToastContainer } from "@/components/admin/shared/ToastContainer";
import { formatDate } from "@/components/admin/shared/DateUtils";
import { useAdminForm } from "@/lib/hooks/useAdminForm";

export default function ItemsManagementPage() {
  const params = useParams();
  const router = useRouter();
  const rankingId = params.id as string;

  const { data: session } = useSession();
  const {
    items,
    ranking,
    loading,
    error,
    isModalOpen,
    editingItem,
    fetchItems,
    fetchRanking,
    createItem,
    updateItem,
    deleteItem,
    reorderItems,
    openCreateModal,
    openEditModal,
    closeModal,
  } = useAdminItems(rankingId);

  const { isSubmitting, handleSubmit } = useAdminForm<ItemFormData>();

  useEffect(() => {
    if (rankingId) {
      fetchRanking();
      fetchItems();
    }
  }, [rankingId, fetchRanking, fetchItems]);

  const handleFormSubmit = async (data: ItemFormData) => {
    if (editingItem) {
      // Update existing item
      const updateData = {
        id: editingItem.id,
        ...data,
      };
      await updateItem(updateData);
    } else {
      // Create new item
      const createData = {
        rankingId,
        ...data,
      };
      await createItem(createData);
    }
    closeModal();
  };

  const handleDelete = async (id: string) => {
    const itemToDelete = items.find((item) => item.id === id);
    if (!itemToDelete) return;

    if (!confirm(`Are you sure you want to delete "${itemToDelete.title}"? This action cannot be undone.`)) {
      return;
    }

    await deleteItem(id);
  };

  const handleMoveUp = async (item: { id: string; position: number }) => {
    if (item.position <= 1) return;

    const itemAbove = items.find(i => i.position === item.position - 1);
    if (!itemAbove) return;

    await reorderItems(rankingId, [
      ...items.filter(i => i.id !== item.id && i.id !== itemAbove.id).map(i => i.id),
      itemAbove.id,
      item.id,
    ]);
  };

  const handleMoveDown = async (item: { id: string; position: number }) => {
    if (item.position >= items.length) return;

    const itemBelow = items.find(i => i.position === item.position + 1);
    if (!itemBelow) return;

    await reorderItems(rankingId, [
      ...items.filter(i => i.id !== item.id && i.id !== itemBelow.id).map(i => i.id),
      item.id,
      itemBelow.id,
    ]);
  };

  if (loading) {
    return <PageLoading message="Loading items..." />;
  }

  if (error) {
    return (
      <PageError
        title="Error Loading Items"
        message={`Failed to load items: ${error}`}
        onRetry={() => {
          fetchItems();
          fetchRanking();
        }}
      />
    );
  }

  if (!ranking) {
    return (
      <PageError
        title="Ranking Not Found"
        message="The requested ranking could not be found."
        onRetry={() => router.push('/admin/rankings')}
        retryText="Back to Rankings"
      />
    );
  }

  return (
    <AdminProtection>
      <div className="container mx-auto py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push('/admin/rankings')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Rankings
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Manage Items: {ranking.title}
              </h1>
              <p className="text-muted-foreground mt-2">
                Add, edit, delete, and reorder items within this ranking
              </p>
            </div>
          </div>
          <Button onClick={openCreateModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Item
          </Button>
        </div>

        {/* Ranking Context */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{ranking.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{ranking.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    {ranking.category}
                  </Badge>
                  <Badge
                    className={
                      ranking.status === "published"
                        ? "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400"
                        : ranking.status === "draft"
                        ? "bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400"
                        : "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/20 dark:text-neutral-400"
                    }
                    variant="secondary"
                  >
                    {ranking.status}
                  </Badge>
                  <span>Created: {formatDate(ranking.createdAt)}</span>
                  <span>Items: {items.length}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`/rankings/${ranking.slug}`, '_blank')}
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                View Ranking
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Items List */}
        <Card>
          <CardHeader>
            <CardTitle>Items ({items.length})</CardTitle>
            <CardDescription>
              Drag and drop or use up/down buttons to reorder items
            </CardDescription>
          </CardHeader>
          <CardContent>
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No items found in this ranking</p>
                <Button onClick={openCreateModal}>Add Your First Item</Button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.sort((a, b) => a.position - b.position).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                        <span className="text-sm font-medium text-muted-foreground w-8">
                          #{item.position}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">
                            {item.title}
                          </h3>
                          {item.imageUrl && (
                            <Badge variant="outline" className="text-xs">
                              Has Image
                            </Badge>
                          )}
                          {item.metadata && Object.keys(item.metadata).length > 0 && (
                            <Badge variant="outline" className="text-xs">
                              {Object.keys(item.metadata).length} Metadata Fields
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Updated: {formatDate(item.updatedAt)}</span>
                          {item.metadata && (
                            <span>
                              Metadata: {Object.keys(item.metadata).join(', ')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMoveUp(item)}
                        disabled={item.position <= 1}
                      >
                        <MoveUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMoveDown(item)}
                        disabled={item.position >= items.length}
                      >
                        <MoveDown className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditModal(item)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                        className="text-error-600 hover:text-error-700 hover:bg-error-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Modal for Create/Edit */}
        <Modal open={isModalOpen} onOpenChange={closeModal}>
          <ModalContent size="2xl">
            <ModalHeader>
              <ModalTitle>
                {editingItem ? "Edit Item" : "Add New Item"}
              </ModalTitle>
            </ModalHeader>
            <ItemForm
              initialData={editingItem ? {
                title: editingItem.title,
                description: editingItem.description,
                imageUrl: editingItem.imageUrl || "",
                metadata: editingItem.metadata || {},
                position: editingItem.position,
              } : undefined}
              onSubmit={handleFormSubmit}
              onCancel={closeModal}
              isLoading={isSubmitting}
              maxPosition={items.length + 1}
              initialPosition={items.length + 1}
            />
          </ModalContent>
        </Modal>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </AdminProtection>
  );
}