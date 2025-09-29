import { IRankingService, IRankingRepository, CreateRankingDTO, UpdateRankingDTO, Ranking } from "@/lib/interfaces/rankingInterface";
import { RankingRepository } from "@/lib/repositories/rankingRepository";

export class RankingService implements IRankingService {
  private repository: IRankingRepository;

  constructor(repository?: IRankingRepository) {
    // Dependency injection - allows for easy testing and swapping implementations
    this.repository = repository || new RankingRepository();
  }

  async createRanking(data: CreateRankingDTO): Promise<Ranking> {
    console.log("Service: Creating ranking with data:", data);

    try {
      // Business logic validation
      if (!data.title?.trim()) {
        throw new Error("Title is required");
      }

      if (!data.description?.trim()) {
        throw new Error("Description is required");
      }

      if (data.cycleLength < 1 || data.cycleLength > 365) {
        throw new Error("Cycle length must be between 1 and 365 days");
      }

      // Delegate to repository
      const ranking = await this.repository.create(data);

      console.log("Service: Successfully created ranking:", ranking.id);
      return ranking;
    } catch (error) {
      console.error("Service: Error creating ranking:", error);
      throw error;
    }
  }

  async updateRanking(data: UpdateRankingDTO): Promise<Ranking> {
    console.log("Service: Updating ranking with data:", data);

    try {
      // Business logic validation
      if (!data.id) {
        throw new Error("Ranking ID is required");
      }

      // Check if ranking exists
      const existingRanking = await this.repository.findById(data.id);
      if (!existingRanking) {
        throw new Error(`Ranking with id ${data.id} not found`);
      }

      // Additional business logic for updates
      if (data.title && !data.title.trim()) {
        throw new Error("Title cannot be empty");
      }

      if (data.description && !data.description.trim()) {
        throw new Error("Description cannot be empty");
      }

      if (data.cycleLength && (data.cycleLength < 1 || data.cycleLength > 365)) {
        throw new Error("Cycle length must be between 1 and 365 days");
      }

      // Delegate to repository
      const updatedRanking = await this.repository.update(data);

      console.log("Service: Successfully updated ranking:", updatedRanking.id);
      return updatedRanking;
    } catch (error) {
      console.error("Service: Error updating ranking:", error);
      throw error;
    }
  }

  async deleteRanking(id: string): Promise<void> {
    console.log("Service: Deleting ranking with id:", id);

    try {
      // Business logic validation
      if (!id) {
        throw new Error("Ranking ID is required");
      }

      // Check if ranking exists before deleting
      const existingRanking = await this.repository.findById(id);
      if (!existingRanking) {
        throw new Error(`Ranking with id ${id} not found`);
      }

      // Additional business logic - e.g., can't delete published rankings?
      if (existingRanking.status === "published") {
        console.warn("Service: Attempting to delete published ranking:", id);
      }

      // Delegate to repository
      await this.repository.delete(id);

      console.log("Service: Successfully deleted ranking:", id);
    } catch (error) {
      console.error("Service: Error deleting ranking:", error);
      throw error;
    }
  }

  async getAllRankings(): Promise<Ranking[]> {
    console.log("Service: Getting all rankings");

    try {
      const rankings = await this.repository.findAll();
      console.log("Service: Retrieved rankings:", rankings.length);
      return rankings;
    } catch (error) {
      console.error("Service: Error getting rankings:", error);
      throw error;
    }
  }

  async getRankingById(id: string): Promise<Ranking | null> {
    console.log("Service: Getting ranking by id:", id);

    try {
      if (!id) {
        throw new Error("Ranking ID is required");
      }

      const ranking = await this.repository.findById(id);
      console.log("Service: Retrieved ranking:", ranking?.id);
      return ranking;
    } catch (error) {
      console.error("Service: Error getting ranking:", error);
      throw error;
    }
  }
}