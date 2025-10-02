import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { RankingItem, CreateItemDTO, UpdateItemDTO, Ranking } from "@/lib/interfaces/rankingInterface";
import { fetchAllRankings } from "@/lib/api/adminRankingsClient";

// Mock API functions for items (will be replaced with real API later)
const fetchItemsByRankingId = async (rankingId: string): Promise<{ success: boolean; data: RankingItem[]; error?: string }> => {
  try {
    const response = await fetch(`/dummy-data/ranking-items.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const rankingItems = data.items.filter((item: RankingItem) => item.rankingId === rankingId);
    return { success: true, data: rankingItems };
  } catch (error) {
    console.error('Error fetching items:', error);
    return { success: false, data: [], error: error instanceof Error ? error.message : 'Failed to fetch items' };
  }
};

const createItem = async (data: CreateItemDTO): Promise<{ success: boolean; data?: RankingItem; error?: string }> => {
  try {
    // In a real implementation, this would make a POST request to an API
    // For now, we'll simulate success since we're working with JSON files
    const newItem: RankingItem = {
      id: `item-${Date.now()}`,
      ...data,
      position: data.position || 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Note: In a real implementation, you would save this to the JSON file or database
    console.log('Creating item:', newItem);

    return { success: true, data: newItem };
  } catch (error) {
    console.error('Error creating item:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to create item' };
  }
};

const updateItem = async (data: UpdateItemDTO): Promise<{ success: boolean; data?: RankingItem; error?: string }> => {
  try {
    // In a real implementation, this would make a PUT request to an API
    // For now, we'll simulate success since we're working with JSON files
    const updatedItem: RankingItem = {
      id: data.id!,
      rankingId: data.rankingId!,
      title: data.title!,
      description: data.description!,
      imageUrl: data.imageUrl,
      metadata: data.metadata,
      position: data.position || 1,
      createdAt: new Date().toISOString(), // Would preserve original in real implementation
      updatedAt: new Date().toISOString(),
    };

    // Note: In a real implementation, you would update this in the JSON file or database
    console.log('Updating item:', updatedItem);

    return { success: true, data: updatedItem };
  } catch (error) {
    console.error('Error updating item:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to update item' };
  }
};

const deleteItem = async (id: string): Promise<{ success: boolean; error?: string }> => {
  try {
    // In a real implementation, this would make a DELETE request to an API
    // For now, we'll simulate success since we're working with JSON files
    console.log('Deleting item:', id);

    // Note: In a real implementation, you would remove this from the JSON file or database
    return { success: true };
  } catch (error) {
    console.error('Error deleting item:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to delete item' };
  }
};

const reorderItems = async (rankingId: string, itemIds: string[]): Promise<{ success: boolean; data?: RankingItem[]; error?: string }> => {
  try {
    // In a real implementation, this would make a PUT request to an API
    // For now, we'll simulate success since we're working with JSON files
    console.log('Reordering items for ranking:', rankingId, 'New order:', itemIds);

    // Note: In a real implementation, you would update positions in the JSON file or database
    // and return the updated items with new positions

    // Get current items and update their positions based on new order
    const currentItemsResponse = await fetchItemsByRankingId(rankingId);
    if (!currentItemsResponse.success) {
      throw new Error(currentItemsResponse.error);
    }

    const reorderedItems = currentItemsResponse.data.map((item, index) => ({
      ...item,
      position: index + 1,
      updatedAt: new Date().toISOString(),
    }));

    return { success: true, data: reorderedItems };
  } catch (error) {
    console.error('Error reordering items:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to reorder items' };
  }
};

interface ItemsResponse {
  success: boolean;
  data: RankingItem[];
}

interface UseAdminItemsReturn {
  // State
  items: RankingItem[];
  ranking: Ranking | null;
  loading: boolean;
  error: string | null;
  isSubmitting: boolean;
  isModalOpen: boolean;
  editingItem: RankingItem | null;

  // Actions
  fetchItems: () => Promise<void>;
  fetchRanking: () => Promise<void>;
  createItem: (data: CreateItemDTO) => Promise<void>;
  updateItem: (data: UpdateItemDTO) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  reorderItems: (rankingId: string, itemIds: string[]) => Promise<void>;
  openCreateModal: () => void;
  openEditModal: (item: RankingItem) => void;
  closeModal: () => void;
}

export function useAdminItems(rankingId: string): UseAdminItemsReturn {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<RankingItem | null>(null);

  // Query for fetching ranking details
  const {
    data: rankingData,
    isLoading: rankingLoading,
    error: rankingError,
  } = useQuery({
    queryKey: ["rankings"],
    queryFn: async () => {
      const result = await fetchAllRankings();
      if (!result.success) {
        throw new Error(result.error || "Failed to fetch rankings");
      }
      return result;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const ranking = rankingData?.data.find(r => r.id === rankingId) || null;

  // Query for fetching items
  const {
    data: itemsResponse,
    isLoading: itemsLoading,
    error: itemsError,
    refetch: refetchItems,
  } = useQuery({
    queryKey: ["items", rankingId],
    queryFn: async () => {
      console.log(`Hook: Fetching items for ranking ${rankingId}...`);
      const result = await fetchItemsByRankingId(rankingId);
      console.log("Hook: Items API response:", result);
      if (!result.success) {
        throw new Error(result.error || "Failed to fetch items");
      }
      return result;
    },
    enabled: !!rankingId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const items = itemsResponse?.data || [];

  // Mutation for creating items
  const createItemMutation = useMutation({
    mutationFn: async (data: CreateItemDTO) => {
      console.log("Hook: Creating item with data:", data);
      const result = await createItem(data);
      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to create item");
      }
      console.log("Hook: Successfully created item:", result.data.id);
      return result.data;
    },
    onSuccess: (newItem) => {
      queryClient.setQueryData(["items", rankingId], (oldResponse: ItemsResponse | undefined) => {
        const existingData = oldResponse?.data || [];
        return {
          ...oldResponse!,
          data: [...existingData, newItem].sort((a, b) => a.position - b.position)
        };
      });
    },
    onError: (err: Error) => {
      const errorMessage = err.message || "Failed to create item";
      console.error("Hook: Error creating item:", err);
      throw new Error(errorMessage);
    },
  });

  // Mutation for updating items
  const updateItemMutation = useMutation({
    mutationFn: async (data: UpdateItemDTO) => {
      console.log("Hook: Updating item with data:", data);
      const result = await updateItem(data);
      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to update item");
      }
      console.log("Hook: Successfully updated item:", result.data.id);
      return result.data;
    },
    onSuccess: (updatedItem) => {
      queryClient.setQueryData(["items", rankingId], (oldResponse: ItemsResponse | undefined) => {
        const existingData = oldResponse?.data || [];
        return {
          ...oldResponse!,
          data: existingData.map(item => item.id === updatedItem.id ? updatedItem : item).sort((a, b) => a.position - b.position)
        };
      });
    },
    onError: (err: Error) => {
      const errorMessage = err.message || "Failed to update item";
      console.error("Hook: Error updating item:", err);
      throw new Error(errorMessage);
    },
  });

  // Mutation for deleting items
  const deleteItemMutation = useMutation({
    mutationFn: async (id: string) => {
      console.log("Hook: Deleting item:", id);
      const result = await deleteItem(id);
      if (!result.success) {
        throw new Error(result.error || "Failed to delete item");
      }
      console.log("Hook: Successfully deleted item:", id);
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["items", rankingId], (oldResponse: ItemsResponse | undefined) => {
        const existingData = oldResponse?.data || [];
        const filteredData = existingData.filter(item => item.id !== deletedId);
        // Reassign positions after deletion
        const repositionedData = filteredData.map((item, index) => ({
          ...item,
          position: index + 1,
          updatedAt: new Date().toISOString(),
        }));
        return {
          ...oldResponse!,
          data: repositionedData
        };
      });
    },
    onError: (err: Error) => {
      const errorMessage = err.message || "Failed to delete item";
      console.error("Hook: Error deleting item:", err);
      throw new Error(errorMessage);
    },
  });

  // Mutation for reordering items
  const reorderItemsMutation = useMutation({
    mutationFn: async ({ rankingId, itemIds }: { rankingId: string; itemIds: string[] }) => {
      console.log("Hook: Reordering items:", { rankingId, itemIds });
      const result = await reorderItems(rankingId, itemIds);
      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to reorder items");
      }
      console.log("Hook: Successfully reordered items");
      return result.data;
    },
    onSuccess: (reorderedItems) => {
      queryClient.setQueryData(["items", rankingId], (oldResponse: ItemsResponse | undefined) => {
        return {
          ...oldResponse!,
          data: reorderedItems
        };
      });
    },
    onError: (err: Error) => {
      const errorMessage = err.message || "Failed to reorder items";
      console.error("Hook: Error reordering items:", err);
      throw new Error(errorMessage);
    },
  });

  // Wrapper functions to maintain the same interface
  const createItemFunc = useCallback(async (data: CreateItemDTO) => {
    await createItemMutation.mutateAsync(data);
  }, [createItemMutation]);

  const updateItemFunc = useCallback(async (data: UpdateItemDTO) => {
    await updateItemMutation.mutateAsync(data);
  }, [updateItemMutation]);

  const deleteItemFunc = useCallback(async (id: string) => {
    await deleteItemMutation.mutateAsync(id);
  }, [deleteItemMutation]);

  const reorderItemsFunc = useCallback(async (rankingId: string, itemIds: string[]) => {
    await reorderItemsMutation.mutateAsync({ rankingId, itemIds });
  }, [reorderItemsMutation]);

  // Combined loading state
  const loading = rankingLoading || itemsLoading;
  const error = rankingError?.message || itemsError?.message || null;
  const isSubmitting = createItemMutation.isPending ||
                       updateItemMutation.isPending ||
                       deleteItemMutation.isPending ||
                       reorderItemsMutation.isPending;

  const openCreateModal = useCallback(() => {
    console.log("Hook: Opening create modal");
    setEditingItem(null);
    setIsModalOpen(true);
  }, []);

  const openEditModal = useCallback((item: RankingItem) => {
    console.log("Hook: Opening edit modal for item:", item.id);
    setEditingItem(item);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log("Hook: Closing modal");
    setIsModalOpen(false);
    setEditingItem(null);
  }, []);

  // Manual fetch functions for refetching
  const fetchItems = useCallback(async () => {
    await refetchItems();
  }, [refetchItems]);

  const fetchRanking = useCallback(async () => {
    await queryClient.refetchQueries({ queryKey: ["rankings"] });
  }, [queryClient]);

  return {
    // State
    items,
    ranking,
    loading,
    error,
    isSubmitting,
    isModalOpen,
    editingItem,

    // Actions
    fetchItems,
    fetchRanking,
    createItem: createItemFunc,
    updateItem: updateItemFunc,
    deleteItem: deleteItemFunc,
    reorderItems: reorderItemsFunc,
    openCreateModal,
    openEditModal,
    closeModal,
  };
}