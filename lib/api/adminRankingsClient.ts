/**
 * API Client for Admin Rankings
 *
 * Provides authenticated API calls to the admin rankings endpoints
 * This handles authentication headers and error handling for the frontend
 */

import type { Ranking, CreateRankingDTO, UpdateRankingDTO } from "@/lib/interfaces/rankingInterface";

export interface RankingsResponse {
  success: boolean;
  data: Ranking[];
  pagination?: {
    current: number;
    total: number;
    count: number;
  };
  error?: string;
  message?: string;
}

export interface RankingResponse {
  success: boolean;
  data?: Ranking;
  error?: string;
  message?: string;
}

/**
 * Get authentication headers for API requests
 */
function getAuthHeaders(): Record<string, string> {
  const adminToken = localStorage.getItem("adminToken");
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (adminToken === "demo-admin") {
    headers['x-local-storage-token'] = "demo-admin";
  }

  return headers;
}

/**
 * Fetch all rankings with authentication
 */
export async function fetchAllRankings(params?: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<RankingsResponse> {
  try {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.search) searchParams.append('search', params.search);

    const queryString = searchParams.toString();
    const url = `/api/admin/rankings${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API Error:', data);
      return {
        success: false,
        error: data.error || 'Failed to fetch rankings',
        message: data.message || 'An error occurred while fetching rankings'
      };
    }

    return {
      success: true,
      data: data.data || [],
      pagination: data.pagination
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      success: false,
      error: 'Network error',
      message: error instanceof Error ? error.message : 'Failed to connect to the server'
    };
  }
}

/**
 * Fetch a single ranking by ID with authentication
 */
export async function fetchRankingById(id: string): Promise<RankingResponse> {
  try {
    const response = await fetch(`/api/admin/rankings/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API Error:', data);
      return {
        success: false,
        error: data.error || 'Failed to fetch ranking',
        message: data.message || 'An error occurred while fetching the ranking'
      };
    }

    return {
      success: true,
      data: data.data
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      success: false,
      error: 'Network error',
      message: error instanceof Error ? error.message : 'Failed to connect to the server'
    };
  }
}

/**
 * Create a new ranking with authentication
 */
export async function createRanking(data: CreateRankingDTO): Promise<RankingResponse> {
  try {
    const response = await fetch('/api/admin/rankings', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('API Error:', result);
      return {
        success: false,
        error: result.error || 'Failed to create ranking',
        message: result.message || 'An error occurred while creating the ranking'
      };
    }

    return {
      success: true,
      data: result.data,
      message: result.message || 'Ranking created successfully'
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      success: false,
      error: 'Network error',
      message: error instanceof Error ? error.message : 'Failed to connect to the server'
    };
  }
}

/**
 * Update an existing ranking with authentication
 */
export async function updateRanking(data: UpdateRankingDTO): Promise<RankingResponse> {
  try {
    const response = await fetch(`/api/admin/rankings/${data.id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('API Error:', result);
      return {
        success: false,
        error: result.error || 'Failed to update ranking',
        message: result.message || 'An error occurred while updating the ranking'
      };
    }

    return {
      success: true,
      data: result.data,
      message: result.message || 'Ranking updated successfully'
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      success: false,
      error: 'Network error',
      message: error instanceof Error ? error.message : 'Failed to connect to the server'
    };
  }
}

/**
 * Delete a ranking with authentication (soft delete)
 */
export async function deleteRanking(id: string): Promise<{ success: boolean; error?: string; message?: string }> {
  try {
    const response = await fetch(`/api/admin/rankings/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('API Error:', result);
      return {
        success: false,
        error: result.error || 'Failed to delete ranking',
        message: result.message || 'An error occurred while deleting the ranking'
      };
    }

    return {
      success: true,
      message: result.message || 'Ranking deleted successfully'
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      success: false,
      error: 'Network error',
      message: error instanceof Error ? error.message : 'Failed to connect to the server'
    };
  }
}