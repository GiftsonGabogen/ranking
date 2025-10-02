import {
  IRankingRepository,
  Ranking,
  CreateRankingDTO,
  UpdateRankingDTO,
} from "@/lib/interfaces/rankingInterface";
import { db } from "@/lib/db";
import { lists } from "@/lib/db/schema";
import { eq, and, isNull, desc } from "drizzle-orm";

export class DatabaseRepository implements IRankingRepository {
  private logPrefix = "[DatabaseRepository]";

  async create(data: CreateRankingDTO): Promise<Ranking> {
    try {
      console.log(`${this.logPrefix} Creating new ranking`, {
        title: data.title,
      });

      // Generate slug from title
      const slug = this.generateSlug(data.title);

      // Map DTO to database schema
      const newRanking = {
        id: crypto.randomUUID(),
        authorId: data.authorId,
        title: data.title,
        slug,
        description: data.description,
        coverImage: data.coverImage || null,
        category: data.category || "general",
        status: "draft" as const,
        allowSuggestions: data.allowSuggestions,
        cycleEndDate: new Date(
          Date.now() + data.cycleLength * 24 * 60 * 60 * 1000
        ).toISOString(),
        viewCount: 0,
      };

      const [result] = await db.insert(lists).values(newRanking).returning();

      console.log(`${this.logPrefix} Ranking created successfully`, {
        id: result.id,
        slug: result.slug,
      });

      return this.mapToRanking(result);
    } catch (error) {
      console.error(`${this.logPrefix} Failed to create ranking`, {
        error,
        data,
      });
      throw new Error("Failed to create ranking");
    }
  }

  async findById(id: string): Promise<Ranking | null> {
    try {
      console.log(`${this.logPrefix} Finding ranking by id`, { id });

      const result = await db
        .select()
        .from(lists)
        .where(and(eq(lists.id, id), isNull(lists.deletedAt)))
        .limit(1);

      if (!result.length) {
        console.log(`${this.logPrefix} Ranking not found`, { id });
        return null;
      }

      console.log(`${this.logPrefix} Ranking found`, {
        id,
        slug: result[0].slug,
      });
      return this.mapToRanking(result[0]);
    } catch (error) {
      console.error(`${this.logPrefix} Failed to find ranking`, { error, id });
      throw new Error("Failed to find ranking");
    }
  }

  async findAll(): Promise<Ranking[]> {
    try {
      console.log(`${this.logPrefix} Finding all rankings`);

      const results = await db
        .select()
        .from(lists)
        .where(isNull(lists.deletedAt))
        .orderBy(desc(lists.createdAt));

      console.log(`${this.logPrefix} Rankings retrieved`, {
        count: results.length,
      });
      return results.map(this.mapToRanking);
    } catch (error) {
      console.error(`${this.logPrefix} Failed to find all rankings`, { error });
      throw new Error("Failed to retrieve rankings");
    }
  }

  async update(data: UpdateRankingDTO): Promise<Ranking> {
    try {
      console.log(`${this.logPrefix} Updating ranking`, { id: data.id });

      const existing = await this.findById(data.id);
      if (!existing) {
        throw new Error("Ranking not found");
      }

      const updateData: any = {
        ...(data.title && {
          title: data.title,
          slug: this.generateSlug(data.title),
        }),
        ...(data.description !== undefined && {
          description: data.description,
        }),
        ...(data.coverImage !== undefined && {
          coverImage: data.coverImage || null,
        }),
        ...(data.category !== undefined && {
          category: data.category,
        }),
        ...(data.isActive !== undefined && {
          status: data.isActive ? "published" : "draft",
        }),
        ...(data.allowSuggestions !== undefined && {
          allowSuggestions: data.allowSuggestions,
        }),
        ...(data.cycleLength !== undefined && {
          cycleEndDate: new Date(
            Date.now() + data.cycleLength * 24 * 60 * 60 * 1000
          ).toISOString(),
        }),
      };

      const [result] = await db
        .update(lists)
        .set(updateData)
        .where(and(eq(lists.id, data.id), isNull(lists.deletedAt)))
        .returning();

      console.log(`${this.logPrefix} Ranking updated successfully`, {
        id: result.id,
      });
      return this.mapToRanking(result);
    } catch (error) {
      console.error(`${this.logPrefix} Failed to update ranking`, {
        error,
        data,
      });
      throw new Error("Failed to update ranking");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      console.log(`${this.logPrefix} Soft deleting ranking`, { id });

      const existing = await this.findById(id);
      if (!existing) {
        throw new Error("Ranking not found");
      }

      await db
        .update(lists)
        .set({ deletedAt: new Date().toISOString() })
        .where(eq(lists.id, id));

      console.log(`${this.logPrefix} Ranking soft deleted successfully`, {
        id,
      });
    } catch (error) {
      console.error(`${this.logPrefix} Failed to delete ranking`, {
        error,
        id,
      });
      throw new Error("Failed to delete ranking");
    }
  }

  private mapToRanking(record: typeof lists.$inferSelect): Ranking {
    return {
      id: record.id,
      authorId: record.authorId,
      title: record.title,
      slug: record.slug,
      description: record.description || "",
      coverImage: record.coverImage || undefined,
      category: record.category,
      status: record.status as "draft" | "published" | "archived",
      cycleEndDate: record.cycleEndDate || "",
      allowSuggestions: record.allowSuggestions,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
    };
  }

  private generateSlug(title: string): string {
    return (
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") +
      "-" +
      Date.now().toString(36)
    );
  }
}
