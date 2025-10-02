import { RankingFormData } from "@/lib/schemas/ranking";
import { ItemFormData } from "@/lib/schemas/item";

export interface Ranking {
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

export interface CreateRankingDTO {
  title: string;
  description: string;
  coverImage?: string;
  category: string;
  isActive: boolean;
  allowSuggestions: boolean;
  cycleLength: number;
  authorId: string;
}

export interface UpdateRankingDTO extends Partial<CreateRankingDTO> {
  id: string;
}

/**
 * Repository Interface for Ranking data access
 *
 * IMPLEMENTATION NOTE:
 * To switch from JSON to database implementation:
 * 1. Create DatabaseRepository class implementing this interface
 * 2. Update ServiceFactory.createRepository() to return DatabaseRepository when needed
 * 3. All service and UI code will work without changes due to interface abstraction
 */
export interface IRankingRepository {
  create(data: CreateRankingDTO): Promise<Ranking>;
  findById(id: string): Promise<Ranking | null>;
  findAll(): Promise<Ranking[]>;
  update(data: UpdateRankingDTO): Promise<Ranking>;
  delete(id: string): Promise<void>;
}

/**
 * Service Interface for Ranking business logic
 *
 * IMPLEMENTATION NOTE:
 * This interface provides the contract for all ranking operations.
 * The current implementation uses JSON storage via repository pattern.
 * When migrating to database, only the repository implementation needs to change.
 */
export interface IRankingService {
  createRanking(data: CreateRankingDTO): Promise<Ranking>;
  updateRanking(data: UpdateRankingDTO): Promise<Ranking>;
  deleteRanking(id: string): Promise<void>;
  getAllRankings(): Promise<Ranking[]>;
  getRankingById(id: string): Promise<Ranking | null>;
}

// Ranking Item Interfaces
export interface RankingItem {
  id: string;
  rankingId: string;
  title: string;
  description: string;
  imageUrl?: string;
  metadata?: Record<string, any>;
  position: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateItemDTO {
  rankingId: string;
  title: string;
  description: string;
  imageUrl?: string;
  metadata?: Record<string, any>;
  position?: number;
}

export interface UpdateItemDTO extends Partial<CreateItemDTO> {
  id: string;
}

/**
 * Repository Interface for Ranking Item data access
 *
 * IMPLEMENTATION NOTE:
 * To switch from JSON to database implementation:
 * 1. Create DatabaseItemRepository class implementing this interface
 * 2. Update ServiceFactory.createItemRepository() to return DatabaseItemRepository when needed
 * 3. All service and UI code will work without changes due to interface abstraction
 */
export interface IItemRepository {
  create(data: CreateItemDTO): Promise<RankingItem>;
  findById(id: string): Promise<RankingItem | null>;
  findByRankingId(rankingId: string): Promise<RankingItem[]>;
  update(data: UpdateItemDTO): Promise<RankingItem>;
  delete(id: string): Promise<void>;
  reorderItems(rankingId: string, itemIds: string[]): Promise<RankingItem[]>;
}

/**
 * Service Interface for Ranking Item business logic
 *
 * IMPLEMENTATION NOTE:
 * This interface provides the contract for all item operations.
 * The current implementation uses JSON storage via repository pattern.
 * When migrating to database, only the repository implementation needs to change.
 */
export interface IItemService {
  createItem(data: CreateItemDTO): Promise<RankingItem>;
  updateItem(data: UpdateItemDTO): Promise<RankingItem>;
  deleteItem(id: string): Promise<void>;
  getItemById(id: string): Promise<RankingItem | null>;
  getItemsByRankingId(rankingId: string): Promise<RankingItem[]>;
  reorderItems(rankingId: string, itemIds: string[]): Promise<RankingItem[]>;
}