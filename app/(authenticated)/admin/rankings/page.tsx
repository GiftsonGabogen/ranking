"use client";

import React, { useState, useEffect } from "react";
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

interface List {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  category: string;
  status: "draft" | "published" | "archived";
  cycleEndDate: string;
  allowSuggestions: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AdminRankingsResponse {
  lists: List[];
}

export default function AdminRankingsPage() {
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      setLoading(true);
      const response = await fetch("/dummy-data/admin-rankings.json");
      if (!response.ok) {
        throw new Error("Failed to fetch rankings");
      }
      const data: AdminRankingsResponse = await response.json();
      setLists(data.lists);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

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

  const handleCreate = () => {
    // TODO: Implement create functionality
    console.log("Create new ranking");
  };

  const handleEdit = (id: string) => {
    // TODO: Implement edit functionality
    console.log("Edit ranking:", id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this ranking?")) {
      return;
    }

    try {
      // TODO: Implement delete functionality
      console.log("Delete ranking:", id);
      // For now, just remove from local state
      setLists(lists.filter((list) => list.id !== id));
    } catch (err) {
      console.error("Failed to delete ranking:", err);
    }
  };

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
              <Button onClick={fetchLists} variant="outline">
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
                  {lists.filter((l) => l.status === "published").length}
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
                  {lists.filter((l) => l.status === "draft").length}
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
                  {lists.filter((l) => l.status === "archived").length}
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
              {lists.map((list) => (
                <div
                  key={list.id}
                  className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground">
                        {list.title}
                      </h3>
                      <Badge
                        className={getStatusColor(list.status)}
                        variant="secondary"
                      >
                        {list.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {list.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {list.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Created: {formatDate(list.createdAt)}</span>
                      <span>
                        Suggestions:{" "}
                        {list.allowSuggestions ? "Allowed" : "Disabled"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(list.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(list.id)}
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
    </div>
  );
}
