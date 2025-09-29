#!/usr/bin/env node

/**
 * Data Migration Script: JSON to Database
 *
 * This script migrates existing JSON data from public/dummy-data/admin-rankings.json
 * to the PostgreSQL database using Drizzle ORM.
 *
 * USAGE:
 * npm run migrate:json-to-db
 * npm run migrate:json-to-db:dry-run
 *
 * FEATURES:
 * - Reads existing JSON data
 * - Maps JSON structure to database schema
 * - Handles data validation and transformation
 * - Provides detailed logging and error handling
 * - Supports dry-run mode for testing
 */

// Import modules (tsx will load .env automatically via --env-file flag)
import { db } from "../lib/db";
import fs from "fs";
import path from "path";
import { lists } from "../lib/db/schema";
import { eq } from "drizzle-orm";

interface JsonRanking {
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

interface JsonData {
  lists: JsonRanking[];
}

interface MigrationResult {
  success: boolean;
  migrated: number;
  skipped: number;
  errors: string[];
  warnings: string[];
}

/**
 * Migration class to handle the data migration process
 */
class JsonToDatabaseMigration {
  private logPrefix = "[Migration]";
  private dryRun: boolean;

  constructor(dryRun = false) {
    this.dryRun = dryRun;

    console.log(`${this.logPrefix} Initialized in ${dryRun ? "DRY RUN" : "PRODUCTION"} mode`);
  }

  /**
   * Read and parse the JSON data file
   */
  private readJsonData(): JsonData {
    try {
      const jsonPath = path.join(process.cwd(), "public", "dummy-data", "admin-rankings.json");
      const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
      console.log(`${this.logPrefix} Successfully read JSON data with ${jsonData.lists.length} rankings`);
      return jsonData;
    } catch (error) {
      throw new Error(`Failed to read JSON data: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Check if a ranking already exists in the database
   */
  private async rankingExists(id: string): Promise<boolean> {
    try {
      const result = await db.select().from(lists).where(eq(lists.id, id)).limit(1);
      return result.length > 0;
    } catch (error) {
      console.warn(`${this.logPrefix} Warning: Failed to check if ranking exists: ${error}`);
      return false; // Assume it doesn't exist if we can't check
    }
  }

  /**
   * Transform JSON ranking data to database format
   */
  private transformRanking(jsonRanking: JsonRanking) {
    return {
      id: jsonRanking.id,
      authorId: "oFHuXdFnQKHgHEOdAs9qdDJNg9iWdpA0", // Use existing real user ID
      title: jsonRanking.title,
      slug: jsonRanking.slug,
      description: jsonRanking.description,
      coverImage: jsonRanking.coverImage || null,
      category: jsonRanking.category || "general",
      status: jsonRanking.status,
      cycleEndDate: new Date(jsonRanking.cycleEndDate).toISOString(),
      allowSuggestions: jsonRanking.allowSuggestions,
      viewCount: 0, // Default view count for migrated data
      createdAt: new Date(jsonRanking.createdAt), // Schema expects Date object
      updatedAt: new Date(jsonRanking.updatedAt), // Schema expects Date object
      deletedAt: null, // Schema expects string for deletedAt
    };
  }

  /**
   * Validate ranking data before migration
   */
  private validateRanking(jsonRanking: JsonRanking): string[] {
    const errors: string[] = [];

    if (!jsonRanking.id || typeof jsonRanking.id !== "string") {
      errors.push("Invalid or missing ID");
    }

    if (!jsonRanking.title || jsonRanking.title.length > 200) {
      errors.push("Invalid title (required, max 200 chars)");
    }

    if (!jsonRanking.slug || jsonRanking.slug.length > 200) {
      errors.push("Invalid slug (required, max 200 chars)");
    }

    if (!jsonRanking.description || jsonRanking.description.length > 1000) {
      errors.push("Invalid description (required, max 1000 chars)");
    }

    if (!["draft", "published", "archived"].includes(jsonRanking.status)) {
      errors.push("Invalid status (must be draft, published, or archived)");
    }

    try {
      new Date(jsonRanking.cycleEndDate);
    } catch {
      errors.push("Invalid cycleEndDate format");
    }

    return errors;
  }

  /**
   * Migrate a single ranking
   */
  private async migrateRanking(jsonRanking: JsonRanking): Promise<boolean> {
    const validationErrors = this.validateRanking(jsonRanking);
    if (validationErrors.length > 0) {
      console.warn(`${this.logPrefix} Skipping ranking ${jsonRanking.id}: ${validationErrors.join(", ")}`);
      return false;
    }

    // Check if ranking already exists
    const exists = await this.rankingExists(jsonRanking.id);
    if (exists) {
      console.log(`${this.logPrefix} Ranking ${jsonRanking.id} already exists, skipping`);
      return false;
    }

    const dbRanking = this.transformRanking(jsonRanking);

    if (this.dryRun) {
      console.log(`${this.logPrefix} [DRY RUN] Would migrate ranking: ${jsonRanking.title} (${jsonRanking.id})`);
      return true;
    }

    try {
      await db.insert(lists).values(dbRanking);
      console.log(`${this.logPrefix} Successfully migrated ranking: ${jsonRanking.title} (${jsonRanking.id})`);
      return true;
    } catch (error) {
      console.error(`${this.logPrefix} Failed to migrate ranking ${jsonRanking.id}:`, error);
      throw error;
    }
  }

  /**
   * Run the complete migration
   */
  async runMigration(): Promise<MigrationResult> {
    const result: MigrationResult = {
      success: false,
      migrated: 0,
      skipped: 0,
      errors: [],
      warnings: [],
    };

    try {
      console.log(`${this.logPrefix} Starting migration from JSON to database...`);

      const jsonData = this.readJsonData();
      console.log(`${this.logPrefix} Found ${jsonData.lists.length} rankings to migrate`);

      for (const ranking of jsonData.lists) {
        try {
          const migrated = await this.migrateRanking(ranking);
          if (migrated) {
            result.migrated++;
          } else {
            result.skipped++;
          }
        } catch (error) {
          result.errors.push(`Failed to migrate ranking ${ranking.id}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }

      result.success = true;
      console.log(`${this.logPrefix} Migration completed successfully!`);
      console.log(`${this.logPrefix} Results: ${result.migrated} migrated, ${result.skipped} skipped`);

    } catch (error) {
      result.success = false;
      result.errors.push(`Migration failed: ${error instanceof Error ? error.message : String(error)}`);
      console.error(`${this.logPrefix} Migration failed:`, error);
    }

    return result;
  }
}

/**
 * Main function to run the migration
 */
async function main() {
  const dryRun = process.argv.includes("--dry-run");

  console.log("=".repeat(60));
  console.log("JSON to Database Migration Script");
  console.log("=".repeat(60));

  const migration = new JsonToDatabaseMigration(dryRun);
  const result = await migration.runMigration();

  console.log("\n" + "=".repeat(60));
  console.log("MIGRATION SUMMARY");
  console.log("=".repeat(60));
  console.log(`Success: ${result.success ? "YES" : "NO"}`);
  console.log(`Migrated: ${result.migrated}`);
  console.log(`Skipped: ${result.skipped}`);
  console.log(`Errors: ${result.errors.length}`);
  console.log(`Warnings: ${result.warnings.length}`);

  if (result.errors.length > 0) {
    console.log("\nERRORS:");
    result.errors.forEach((error, index) => {
      console.log(`${index + 1}. ${error}`);
    });
  }

  if (result.warnings.length > 0) {
    console.log("\nWARNINGS:");
    result.warnings.forEach((warning, index) => {
      console.log(`${index + 1}. ${warning}`);
    });
  }

  console.log("=".repeat(60));

  if (!result.success) {
    process.exit(1);
  }
}

// Run the migration if this script is executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error("Migration script failed:", error);
    process.exit(1);
  });
}

export { JsonToDatabaseMigration };