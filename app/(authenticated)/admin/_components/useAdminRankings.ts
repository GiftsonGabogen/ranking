import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Ranking, CreateRankingDTO, UpdateRankingDTO } from "@/lib/interfaces/rankingInterface";
import {
  fetchAllRankings,
  createRanking as createRankingAPI,
  updateRanking as updateRankingAPI,
  deleteRanking as deleteRankingAPI,
} from "@/lib/api/adminRankingsClient";

interface RankingsResponse {
  success: boolean;
  data: Ranking[];
  pagination?: {
    current: number;
    total: number;
    count: number;
  };
}

interface UseAdminRankingsReturn {
  // State
  rankings: Ranking[];
  loading: boolean;
  error: string | null;
  isSubmitting: boolean;
  isModalOpen: boolean;
  editingRanking: Ranking | null;

  // Actions
  fetchRankings: () => Promise<void>;
  createRanking: (data: CreateRankingDTO) => Promise<void>;
  updateRanking: (data: UpdateRankingDTO) => Promise<void>;
  deleteRanking: (id: string) => Promise<void>;
  openCreateModal: () => void;
  openEditModal: (ranking: Ranking) => void;
  closeModal: () => void;
}

export function useAdminRankings(): UseAdminRankingsReturn {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRanking, setEditingRanking] = useState<Ranking | null>(null);

  // Query for fetching rankings
  const {
    data: response,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["rankings"],
    queryFn: async () => {
      console.log("Hook: Fetching rankings via API...");
      const result = await fetchAllRankings();
      console.log("Hook: API response:", result);
      if (!result.success) {
        throw new Error(result.error || "Failed to fetch rankings");
      }
      return result;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const rankings = response?.data || [];

  // Mutation for creating rankings
  const createRankingMutation = useMutation({
    mutationFn: async (data: CreateRankingDTO) => {
      console.log("Hook: Creating ranking with data:", data);
      const result = await createRankingAPI(data);
      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to create ranking");
      }
      console.log("Hook: Successfully created ranking:", result.data.id);
      return result.data;
    },
    onSuccess: (newRanking) => {
      queryClient.setQueryData(["rankings"], (oldResponse: RankingsResponse | undefined) => {
        const existingData = oldResponse?.data || [];
        return {
          ...oldResponse!,
          data: [...existingData, newRanking]
        };
      });
    },
    onError: (err: Error) => {
      const errorMessage = err.message || "Failed to create ranking";
      console.error("Hook: Error creating ranking:", err);
      throw new Error(errorMessage);
    },
  });

  // Mutation for updating rankings
  const updateRankingMutation = useMutation({
    mutationFn: async (data: UpdateRankingDTO) => {
      console.log("Hook: Updating ranking with data:", data);
      const result = await updateRankingAPI(data);
      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to update ranking");
      }
      console.log("Hook: Successfully updated ranking:", result.data.id);
      return result.data;
    },
    onSuccess: (updatedRanking) => {
      queryClient.setQueryData(["rankings"], (oldResponse: RankingsResponse | undefined) => {
        const existingData = oldResponse?.data || [];
        return {
          ...oldResponse!,
          data: existingData.map(ranking => ranking.id === updatedRanking.id ? updatedRanking : ranking)
        };
      });
    },
    onError: (err: Error) => {
      const errorMessage = err.message || "Failed to update ranking";
      console.error("Hook: Error updating ranking:", err);
      throw new Error(errorMessage);
    },
  });

  // Mutation for deleting rankings
  const deleteRankingMutation = useMutation({
    mutationFn: async (id: string) => {
      console.log("Hook: Deleting ranking:", id);
      const result = await deleteRankingAPI(id);
      if (!result.success) {
        throw new Error(result.error || "Failed to delete ranking");
      }
      console.log("Hook: Successfully deleted ranking:", id);
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["rankings"], (oldResponse: RankingsResponse | undefined) => {
        const existingData = oldResponse?.data || [];
        return {
          ...oldResponse!,
          data: existingData.filter(ranking => ranking.id !== deletedId)
        };
      });
    },
    onError: (err: Error) => {
      const errorMessage = err.message || "Failed to delete ranking";
      console.error("Hook: Error deleting ranking:", err);
      throw new Error(errorMessage);
    },
  });

  // Wrapper functions to maintain the same interface
  const createRanking = useCallback(async (data: CreateRankingDTO) => {
    await createRankingMutation.mutateAsync(data);
  }, [createRankingMutation]);

  const updateRanking = useCallback(async (data: UpdateRankingDTO) => {
    await updateRankingMutation.mutateAsync(data);
  }, [updateRankingMutation]);

  const deleteRanking = useCallback(async (id: string) => {
    await deleteRankingMutation.mutateAsync(id);
  }, [deleteRankingMutation]);

  // Combined loading state for mutations
  const isSubmitting = createRankingMutation.isPending ||
                       updateRankingMutation.isPending ||
                       deleteRankingMutation.isPending;

  const openCreateModal = useCallback(() => {
    console.log("Hook: Opening create modal");
    setEditingRanking(null);
    setIsModalOpen(true);
  }, []);

  const openEditModal = useCallback((ranking: Ranking) => {
    console.log("Hook: Opening edit modal for ranking:", ranking.id);
    setEditingRanking(ranking);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log("Hook: Closing modal");
    setIsModalOpen(false);
    setEditingRanking(null);
  }, []);

  // Manual fetch function for refetching
  const fetchRankings = useCallback(async () => {
    await queryClient.refetchQueries({ queryKey: ["rankings"] });
  }, [queryClient]);

  return {
    // State
    rankings,
    loading,
    error: error?.message || null,
    isSubmitting,
    isModalOpen,
    editingRanking,

    // Actions
    fetchRankings,
    createRanking,
    updateRanking,
    deleteRanking,
    openCreateModal,
    openEditModal,
    closeModal,
  };
}