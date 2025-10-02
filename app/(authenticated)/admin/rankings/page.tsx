"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loading } from "@/components/ui/loading";
import { Plus, Edit, Trash2, Settings, List } from "lucide-react";
import { RankingForm } from "@/components/admin/RankingForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { type RankingFormData } from "@/lib/schemas/ranking";
import { useAdminRankings } from "../_components/useAdminRankings";
import { useSession } from "@/lib/auth-client";
import { AdminProtection } from "@/components/admin/shared/AdminProtection";
import { PageError } from "@/components/admin/shared/PageError";
import { PageLoading } from "@/components/admin/shared/PageLoading";
import { ToastContainer } from "@/components/admin/shared/ToastContainer";
import { StatsCard } from "@/components/admin/shared/StatsCard";
import { formatDate } from "@/components/admin/shared/DateUtils";
import { useAdminForm } from "@/lib/hooks/useAdminForm";
import { useRouter } from "next/navigation";

export default function AdminRankingsPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    rankings: lists,
    loading,
    error,
    isModalOpen,
    editingRanking,
    fetchRankings,
    createRanking,
    updateRanking,
    deleteRanking,
    openCreateModal,
    openEditModal,
    closeModal,
  } = useAdminRankings();

  const { isSubmitting, handleSubmit } = useAdminForm<RankingFormData>();

  useEffect(() => {
    fetchRankings();
  }, [fetchRankings]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400";
      case "draft":
        return "bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400";
      case "archived":
        return "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/20 dark:text-neutral-400";
      default:
        return "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/20 dark:text-neutral-400";
    }
  };

  const handleFormSubmit = async (data: RankingFormData) => {
    if (editingRanking) {
      // Update existing ranking
      const updateData = {
        id: editingRanking.id,
        ...data,
      };
      await updateRanking(updateData);
    } else {
      // Create new ranking - use real user ID from better-auth session
      if (!session?.user?.id) {
        throw new Error("User not authenticated");
      }
      const createData = {
        ...data,
        authorId: session.user.id,
      };
      await createRanking(createData);
    }
    closeModal();
  };

  const handleEdit = (ranking: any) => {
    openEditModal(ranking);
  };

  const handleDelete = async (id: string) => {
    const rankingToDelete = lists.find((ranking) => ranking.id === id);
    if (!rankingToDelete) return;

    if (!confirm(`Are you sure you want to delete "${rankingToDelete.title}"? This action cannot be undone.`)) {
      return;
    }

    await deleteRanking(id);
  };

  if (loading) {
    return <PageLoading message="Loading rankings..." />;
  }

  if (error) {
    return (
      <PageError
        title="Error Loading Rankings"
        message={`Failed to load rankings: ${error}`}
        onRetry={fetchRankings}
      />
    );
  }

  return (
    <AdminProtection>
      <div className="container mx-auto py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Rankings Management
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage and organize ranking lists for your community
            </p>
          </div>
          <Button onClick={openCreateModal} className="gap-2">
            <Plus className="h-4 w-4" />
            Create New Ranking
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatsCard
            title="Total Lists"
            value={lists.length}
            icon={Settings}
          />
          <StatsCard
            title="Published"
            value={lists.filter((ranking) => ranking.status === "published").length}
            icon={Settings}
            color="success"
          />
          <StatsCard
            title="Draft"
            value={lists.filter((ranking) => ranking.status === "draft").length}
            icon={Settings}
            color="warning"
          />
          <StatsCard
            title="Archived"
            value={lists.filter((ranking) => ranking.status === "archived").length}
            icon={Settings}
            color="default"
          />
        </div>

        {/* Rankings List */}
        <Card>
          <CardHeader>
            <CardTitle>All Rankings</CardTitle>
            <CardDescription>
              View and manage all ranking lists in your system
            </CardDescription>
          </CardHeader>
          <CardContent>
            {lists.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No rankings found</p>
                <Button onClick={openCreateModal}>Create Your First Ranking</Button>
              </div>
            ) : (
              <div className="space-y-3">
                {lists.map((ranking) => (
                  <div
                    key={ranking.id}
                    className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {ranking.title}
                        </h3>
                        <Badge
                          className={getStatusColor(ranking.status)}
                          variant="secondary"
                        >
                          {ranking.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {ranking.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {ranking.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Created: {formatDate(ranking.createdAt)}</span>
                        <span>
                          Suggestions:{" "}
                          {ranking.allowSuggestions ? "Allowed" : "Disabled"}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/admin/rankings/${ranking.id}/items`)}
                        className="gap-2"
                      >
                        <List className="h-4 w-4" />
                        Items
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(ranking)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(ranking.id)}
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
                {editingRanking ? "Edit Ranking" : "Create New Ranking"}
              </ModalTitle>
            </ModalHeader>
            <RankingForm
              initialData={
                editingRanking
                  ? {
                      title: editingRanking.title,
                      description: editingRanking.description,
                      coverImage: editingRanking.coverImage || "",
                      category: editingRanking.category,
                      isActive: editingRanking.status === "published",
                      allowSuggestions: editingRanking.allowSuggestions,
                      cycleLength: Math.ceil(
                        (new Date(editingRanking.cycleEndDate).getTime() -
                          Date.now()) /
                          (24 * 60 * 60 * 1000)
                      ),
                    }
                  : undefined
              }
              onSubmit={handleFormSubmit}
              onCancel={closeModal}
              isLoading={isSubmitting}
            />
          </ModalContent>
        </Modal>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </AdminProtection>
  );
}