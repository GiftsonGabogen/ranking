"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
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
import { SortableItem } from "@/components/admin/SortableItem";
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
import type { RankingItem } from "@/lib/interfaces/rankingInterface";

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

  // Drag and drop setup
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [draggedItem, setDraggedItem] = React.useState<RankingItem | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const sortedItems = [...items].sort((a, b) => a.position - b.position);

  // Debug logging to track items state
  useEffect(() => {
    console.log('UI: Items updated:', items.map(i => ({ id: i.id, position: i.position, title: i.title })));
    console.log('UI: Sorted items:', sortedItems.map(i => ({ id: i.id, position: i.position, title: i.title })));
  }, [items, sortedItems]);

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

  // Drag event handlers
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const item = items.find(i => i.id === active.id);
    setActiveId(active.id as string);
    setDraggedItem(item || null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over) {
      setActiveId(null);
      setDraggedItem(null);
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = sortedItems.findIndex(item => item.id === active.id);
      const newIndex = sortedItems.findIndex(item => item.id === over.id);

      console.log('Drag End:', {
        activeId: active.id,
        overId: over.id,
        oldIndex,
        newIndex,
        sortedItems: sortedItems.map(i => ({ id: i.id, position: i.position }))
      });

      if (oldIndex !== -1 && newIndex !== -1) {
        const newItems = arrayMove(sortedItems, oldIndex, newIndex);
        const newItemIds = newItems.map(item => item.id);

        console.log('Drag End - New order:', newItemIds);
        console.log('Drag End - New items with positions:', newItems.map(i => ({ id: i.id, position: i.position })));

        await reorderItems(rankingId, newItemIds);
      }
    }

    setActiveId(null);
    setDraggedItem(null);
  };

  const handleMoveUp = async (item: RankingItem) => {
    if (item.position <= 1) return;

    const itemAbove = items.find(i => i.position === item.position - 1);
    if (!itemAbove) return;

    // Create the new order by swapping the two items while preserving order of others
    const newOrder = sortedItems.map(i => {
      if (i.id === item.id) return itemAbove.id;
      if (i.id === itemAbove.id) return item.id;
      return i.id;
    });

    console.log('Move Up - New order:', newOrder);
    await reorderItems(rankingId, newOrder);
  };

  const handleMoveDown = async (item: RankingItem) => {
    if (item.position >= items.length) return;

    const itemBelow = items.find(i => i.position === item.position + 1);
    if (!itemBelow) return;

    // Create the new order by swapping the two items while preserving order of others
    const newOrder = sortedItems.map(i => {
      if (i.id === item.id) return itemBelow.id;
      if (i.id === itemBelow.id) return item.id;
      return i.id;
    });

    console.log('Move Down - New order:', newOrder);
    await reorderItems(rankingId, newOrder);
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
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={sortedItems.map(item => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-3">
                    {sortedItems.map((item) => (
                      <SortableItem
                        key={item.id}
                        item={item}
                        onEdit={openEditModal}
                        onDelete={handleDelete}
                        onMoveUp={handleMoveUp}
                        onMoveDown={handleMoveDown}
                        totalItems={items.length}
                      />
                    ))}
                  </div>
                </SortableContext>
                <DragOverlay>
                  {activeId && draggedItem ? (
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl opacity-90">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground w-8">
                          #{draggedItem.position}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{draggedItem.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {draggedItem.description}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </DragOverlay>
              </DndContext>
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