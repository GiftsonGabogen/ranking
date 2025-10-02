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
import { Plus, Edit, Trash2, Settings } from "lucide-react";
import { RankingForm } from "@/components/admin/RankingForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { type RankingFormData } from "@/lib/schemas/ranking";
import { useAdminRankings } from "../_components/useAdminRankings";
import { useAdminAuth } from "@/lib/hooks/useAdminAuth";
import { useSession } from "@/lib/auth-client";

export default function AdminRankingsPage() {
  const { isAdmin, isLoading: authLoading } = useAdminAuth();
  const { data: session } = useSession();
  const {
    rankings: lists,
    loading,
    error,
    isSubmitting,
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Button handlers are now provided by the hook
  const handleCreate = openCreateModal;
  const handleEdit = openEditModal;

  const handleFormSubmit = async (data: RankingFormData) => {
    try {
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
      // No need to manually fetch - React Query handles cache updates automatically
    } catch (error) {
      console.error("Failed to save ranking:", error);
      alert(error instanceof Error ? error.message : "Failed to save ranking");
    }
  };

  const handleDelete = async (id: string) => {
    const rankingToDelete = lists.find((ranking) => ranking.id === id);
    if (!rankingToDelete) {
      console.error("Ranking not found");
      return;
    }

    if (
      !confirm(
        `Are you sure you want to delete "${rankingToDelete.title}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    try {
      await deleteRanking(id);
      console.log(`Successfully deleted "${rankingToDelete.title}"`);
    } catch (err) {
      console.error("Failed to delete ranking:", err);
      alert(
        err instanceof Error
          ? err.message
          : "Failed to delete ranking. Please try again."
      );
    }
  };

  // Admin protection
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-error-600 mb-4">
                Admin Access Required
              </h1>
              <p className="text-muted-foreground mb-6">
                You need administrator privileges to access this page.
              </p>
              <button
                onClick={() => {
                  localStorage.setItem('adminToken', 'demo-admin');
                  window.location.reload();
                }}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Demo Admin Login
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loading size="lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-error-600 dark:text-error-400 mb-4">
                Error loading rankings: {error}
              </p>
              <Button onClick={fetchRankings} variant="outline">
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
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
        <Button onClick={handleCreate} className="gap-2">
          <Plus className="h-4 w-4" />
          Create New Ranking
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card variant="animated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Lists
                </p>
                <p className="text-2xl font-bold">{lists.length}</p>
              </div>
              <Settings className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card variant="animated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Published
                </p>
                <p className="text-2xl font-bold text-success-600">
                  {
                    lists.filter((ranking) => ranking.status === "published")
                      .length
                  }
                </p>
              </div>
              <div className="h-3 w-3 rounded-full bg-success-500" />
            </div>
          </CardContent>
        </Card>
        <Card variant="animated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Draft
                </p>
                <p className="text-2xl font-bold text-warning-600">
                  {lists.filter((ranking) => ranking.status === "draft").length}
                </p>
              </div>
              <div className="h-3 w-3 rounded-full bg-warning-500" />
            </div>
          </CardContent>
        </Card>
        <Card variant="animated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Archived
                </p>
                <p className="text-2xl font-bold text-neutral-600">
                  {
                    lists.filter((ranking) => ranking.status === "archived")
                      .length
                  }
                </p>
              </div>
              <div className="h-3 w-3 rounded-full bg-neutral-500" />
            </div>
          </CardContent>
        </Card>
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
              <Button onClick={handleCreate}>Create Your First Ranking</Button>
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
    </div>
  );
}
