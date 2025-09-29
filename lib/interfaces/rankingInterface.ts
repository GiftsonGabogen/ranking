import { RankingFormData } from "@/lib/schemas/ranking";

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
  isActive: boolean;
  allowSuggestions: boolean;
  cycleLength: number;
}

export interface UpdateRankingDTO extends Partial<CreateRankingDTO> {
  id: string;
}

export interface IRankingRepository {
  create(data: CreateRankingDTO): Promise<Ranking>;
  findById(id: string): Promise<Ranking | null>;
  findAll(): Promise<Ranking[]>;
  update(data: UpdateRankingDTO): Promise<Ranking>;
  delete(id: string): Promise<void>;
}

export interface IRankingService {
  createRanking(data: CreateRankingDTO): Promise<Ranking>;
  updateRanking(data: UpdateRankingDTO): Promise<Ranking>;
  deleteRanking(id: string): Promise<void>;
  getAllRankings(): Promise<Ranking[]>;
  getRankingById(id: string): Promise<Ranking | null>;
}