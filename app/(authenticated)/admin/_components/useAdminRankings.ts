import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { RankingService } from "@/lib/services/rankingService";
import type { Ranking, CreateRankingDTO, UpdateRankingDTO } from "@/lib/interfaces/rankingInterface";

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
  const [rankingService] = useState(() => new RankingService());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRanking, setEditingRanking] = useState<Ranking | null>(null);

  // Query for fetching rankings
  const {
    data: rankings = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["rankings"],
    queryFn: async () => {
      console.log("Hook: Fetching rankings...");
      const fetchedRankings = await rankingService.getAllRankings();
      console.log("Hook: Successfully fetched rankings:", fetchedRankings.length);
      return fetchedRankings;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Mutation for creating rankings
  const createRankingMutation = useMutation({
    mutationFn: async (data: CreateRankingDTO) => {
      console.log("Hook: Creating ranking with data:", data);
      const newRanking = await rankingService.createRanking(data);
      console.log("Hook: Successfully created ranking:", newRanking.id);
      return newRanking;
    },
    onSuccess: (newRanking) => {
      queryClient.setQueryData(["rankings"], (old: Ranking[]) => [...old, newRanking]);
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
      const updatedRanking = await rankingService.updateRanking(data);
      console.log("Hook: Successfully updated ranking:", updatedRanking.id);
      return updatedRanking;
    },
    onSuccess: (updatedRanking) => {
      queryClient.setQueryData(["rankings"], (old: Ranking[]) =>
        old.map(ranking => ranking.id === updatedRanking.id ? updatedRanking : ranking)
      );
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
      await rankingService.deleteRanking(id);
      console.log("Hook: Successfully deleted ranking:", id);
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["rankings"], (old: Ranking[]) =>
        old.filter(ranking => ranking.id !== deletedId)
      );
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