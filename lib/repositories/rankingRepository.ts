import {
  IRankingRepository,
  Ranking,
  CreateRankingDTO,
  UpdateRankingDTO,
} from "@/lib/interfaces/rankingInterface";

export class RankingRepository implements IRankingRepository {
  private static readonly DATA_URL = "/dummy-data/admin-rankings.json";

  private async fetchRankings(): Promise<Ranking[]> {
    try {
      const response = await fetch(RankingRepository.DATA_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch rankings");
      }
      const data = await response.json();
      return data.lists || [];
    } catch (error) {
      console.error("Error fetching rankings:", error);
      throw error;
    }
  }

  async create(data: CreateRankingDTO): Promise<Ranking> {
    console.log("Repository: Creating ranking with data:", data);

    // In a real implementation, this would make an API call
    // For now, we'll simulate the creation and return a mock object
    const newRanking: Ranking = {
      id: Date.now().toString(),
      authorId: data.authorId,
      slug: data.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
      coverImage: `https://images.unsplash.com/photo-${Math.floor(
        Math.random() * 1000000
      )}?w=800&h=400&fit=crop`,
      category: "general",
      status: data.isActive ? "published" : "draft",
      cycleEndDate: new Date(
        Date.now() + data.cycleLength * 24 * 60 * 60 * 1000
      ).toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title: data.title,
      description: data.description,
      allowSuggestions: data.allowSuggestions,
    };

    console.log("Repository: Created ranking:", newRanking);
    return newRanking;
  }

  async findById(id: string): Promise<Ranking | null> {
    console.log("Repository: Finding ranking by id:", id);

    try {
      const rankings = await this.fetchRankings();
      const ranking = rankings.find((r) => r.id === id);
      console.log("Repository: Found ranking:", ranking);
      return ranking || null;
    } catch (error) {
      console.error("Repository: Error finding ranking:", error);
      throw error;
    }
  }

  async findAll(): Promise<Ranking[]> {
    console.log("Repository: Fetching all rankings");

    try {
      const rankings = await this.fetchRankings();
      console.log("Repository: Fetched rankings:", rankings.length);
      return rankings;
    } catch (error) {
      console.error("Repository: Error fetching rankings:", error);
      throw error;
    }
  }

  async update(data: UpdateRankingDTO): Promise<Ranking> {
    console.log("Repository: Updating ranking with data:", data);

    try {
      const rankings = await this.fetchRankings();
      const existingRanking = rankings.find((r) => r.id === data.id);

      if (!existingRanking) {
        throw new Error(`Ranking with id ${data.id} not found`);
      }

      const updatedRanking: Ranking = {
        ...existingRanking,
        title: data.title || existingRanking.title,
        description: data.description || existingRanking.description,
        status:
          data.isActive !== undefined
            ? data.isActive
              ? "published"
              : "draft"
            : existingRanking.status,
        allowSuggestions:
          data.allowSuggestions !== undefined
            ? data.allowSuggestions
            : existingRanking.allowSuggestions,
        cycleEndDate: data.cycleLength
          ? new Date(
              Date.now() + data.cycleLength * 24 * 60 * 60 * 1000
            ).toISOString()
          : existingRanking.cycleEndDate,
        updatedAt: new Date().toISOString(),
      };

      console.log("Repository: Updated ranking:", updatedRanking);
      return updatedRanking;
    } catch (error) {
      console.error("Repository: Error updating ranking:", error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    console.log("Repository: Deleting ranking with id:", id);

    try {
      const rankings = await this.fetchRankings();
      const rankingExists = rankings.some((r) => r.id === id);

      if (!rankingExists) {
        throw new Error(`Ranking with id ${id} not found`);
      }

      console.log("Repository: Deleted ranking:", id);
      // In a real implementation, this would make a DELETE API call
    } catch (error) {
      console.error("Repository: Error deleting ranking:", error);
      throw error;
    }
  }
}
