import { IRankingService, IRankingRepository, CreateRankingDTO, UpdateRankingDTO, Ranking } from "@/lib/interfaces/rankingInterface";
import { RankingRepository } from "@/lib/repositories/rankingRepository";

/**
 * Ranking Service - Business logic layer for ranking operations
 *
 * IMPLEMENTATION NOTE:
 * This service uses dependency injection to receive a repository.
 * Current implementation uses JSON file storage via RankingRepository.
 * To switch to database:
 * 1. Create DatabaseRepository implementing IRankingRepository
 * 2. The service will automatically use it when injected by ServiceFactory
 * 3. No changes needed in this service layer - it's repository-agnostic
 */
export class RankingService implements IRankingService {
  private repository: IRankingRepository;

  constructor(repository?: IRankingRepository) {
    // Dependency injection - allows for easy testing and swapping implementations
    this.repository = repository || new RankingRepository();
  }

  async createRanking(data: CreateRankingDTO): Promise<Ranking> {
    console.log("Service: Starting create ranking process with data:", JSON.stringify(data, null, 2));

    try {
      // Business logic validation
      if (!data.title?.trim()) {
        console.error("Service: Validation failed - Title is required");
        throw new Error("Title is required");
      }

      if (!data.description?.trim()) {
        console.error("Service: Validation failed - Description is required");
        throw new Error("Description is required");
      }

      if (data.cycleLength < 1 || data.cycleLength > 365) {
        console.error("Service: Validation failed - Invalid cycle length:", data.cycleLength);
        throw new Error("Cycle length must be between 1 and 365 days");
      }

      console.log("Service: Validation passed, delegating to repository");

      // Delegate to repository
      const ranking = await this.repository.create(data);

      console.log("Service: Successfully created ranking with ID:", ranking.id);
      console.log("Service: Ranking details:", JSON.stringify({
        id: ranking.id,
        title: ranking.title,
        status: ranking.status,
        createdAt: ranking.createdAt
      }, null, 2));

      return ranking;
    } catch (error) {
      console.error("Service: Failed to create ranking. Error details:", {
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
        inputData: data
      });
      throw error;
    }
  }

  async updateRanking(data: UpdateRankingDTO): Promise<Ranking> {
    console.log("Service: Starting update ranking process with data:", JSON.stringify(data, null, 2));

    try {
      // Business logic validation
      if (!data.id) {
        console.error("Service: Validation failed - Ranking ID is required");
        throw new Error("Ranking ID is required");
      }

      console.log("Service: Checking if ranking exists with ID:", data.id);

      // Check if ranking exists
      const existingRanking = await this.repository.findById(data.id);
      if (!existingRanking) {
        console.error("Service: Validation failed - Ranking not found with ID:", data.id);
        throw new Error(`Ranking with id ${data.id} not found`);
      }

      console.log("Service: Found existing ranking:", JSON.stringify({
        id: existingRanking.id,
        title: existingRanking.title,
        status: existingRanking.status
      }, null, 2));

      // Additional business logic for updates
      if (data.title && !data.title.trim()) {
        console.error("Service: Validation failed - Title cannot be empty");
        throw new Error("Title cannot be empty");
      }

      if (data.description && !data.description.trim()) {
        console.error("Service: Validation failed - Description cannot be empty");
        throw new Error("Description cannot be empty");
      }

      if (data.cycleLength && (data.cycleLength < 1 || data.cycleLength > 365)) {
        console.error("Service: Validation failed - Invalid cycle length:", data.cycleLength);
        throw new Error("Cycle length must be between 1 and 365 days");
      }

      console.log("Service: Update validation passed, delegating to repository");

      // Delegate to repository
      const updatedRanking = await this.repository.update(data);

      console.log("Service: Successfully updated ranking with ID:", updatedRanking.id);
      console.log("Service: Updated ranking details:", JSON.stringify({
        id: updatedRanking.id,
        title: updatedRanking.title,
        status: updatedRanking.status,
        updatedAt: updatedRanking.updatedAt
      }, null, 2));

      return updatedRanking;
    } catch (error) {
      console.error("Service: Failed to update ranking. Error details:", {
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
        inputData: data
      });
      throw error;
    }
  }

  async deleteRanking(id: string): Promise<void> {
    console.log("Service: Starting delete ranking process with ID:", id);

    try {
      // Business logic validation
      if (!id) {
        console.error("Service: Validation failed - Ranking ID is required");
        throw new Error("Ranking ID is required");
      }

      console.log("Service: Checking if ranking exists before deletion with ID:", id);

      // Check if ranking exists before deleting
      const existingRanking = await this.repository.findById(id);
      if (!existingRanking) {
        console.error("Service: Validation failed - Ranking not found with ID:", id);
        throw new Error(`Ranking with id ${id} not found`);
      }

      console.log("Service: Found ranking for deletion:", JSON.stringify({
        id: existingRanking.id,
        title: existingRanking.title,
        status: existingRanking.status
      }, null, 2));

      // Additional business logic - e.g., can't delete published rankings?
      if (existingRanking.status === "published") {
        console.warn("Service: Warning - Attempting to delete published ranking:", id);
      }

      console.log("Service: Delete validation passed, delegating to repository");

      // Delegate to repository
      await this.repository.delete(id);

      console.log("Service: Successfully deleted ranking with ID:", id);
    } catch (error) {
      console.error("Service: Failed to delete ranking. Error details:", {
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
        rankingId: id
      });
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