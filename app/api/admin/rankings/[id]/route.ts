import { NextRequest, NextResponse } from "next/server";
import { rankingService } from "@/lib/factories/serviceFactory";

/**
 * GET /api/admin/rankings/[id]
 *
 * Retrieve a specific ranking by ID
 *
 * Path Parameters:
 * - id: string - The ranking ID to retrieve
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    console.log("[AdminRankingsAPI] GET - Retrieving ranking", { id });

    // Validate ID format
    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid ranking ID",
          message: "A valid ranking ID is required"
        },
        { status: 400 }
      );
    }

    // Get ranking by ID through service layer
    const ranking = await rankingService().getRankingById(id);

    if (!ranking) {
      console.log("[AdminRankingsAPI] Ranking not found", { id });
      return NextResponse.json(
        {
          success: false,
          error: "Ranking not found",
          message: `No ranking found with id: ${id}`
        },
        { status: 404 }
      );
    }

    console.log("[AdminRankingsAPI] Ranking retrieved successfully", {
      id,
      title: ranking.title
    });

    return NextResponse.json({
      success: true,
      data: ranking
    });

  } catch (error) {
    console.error("[AdminRankingsAPI] Failed to retrieve ranking", { error, id: params.id });
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve ranking",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/rankings/[id]
 *
 * Update an existing ranking
 *
 * Path Parameters:
 * - id: string - The ranking ID to update
 *
 * Body Parameters:
 * - title: string (optional) - Updated ranking title
 * - description: string (optional) - Updated ranking description
 * - isActive: boolean (optional) - Updated active status
 * - allowSuggestions: boolean (optional) - Updated suggestions setting
 * - cycleLength: number (optional) - Updated cycle length
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    console.log("[AdminRankingsAPI] PUT - Updating ranking", { id });

    // Validate ID format
    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid ranking ID",
          message: "A valid ranking ID is required"
        },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { title, description, isActive, allowSuggestions, cycleLength } = body;

    // Check if ranking exists before updating
    const existingRanking = await rankingService().getRankingById(id);
    if (!existingRanking) {
      console.log("[AdminRankingsAPI] Ranking not found for update", { id });
      return NextResponse.json(
        {
          success: false,
          error: "Ranking not found",
          message: `No ranking found with id: ${id}`
        },
        { status: 404 }
      );
    }

    // Validate field lengths if provided
    if (title && title.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid title length",
          message: "Title must be less than 100 characters"
        },
        { status: 400 }
      );
    }

    if (description && description.length > 500) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid description length",
          message: "Description must be less than 500 characters"
        },
        { status: 400 }
      );
    }

    // Update ranking through service layer
    const updatedRanking = await rankingService().updateRanking({
      id,
      title,
      description,
      isActive,
      allowSuggestions,
      cycleLength
    });

    console.log("[AdminRankingsAPI] Ranking updated successfully", {
      id,
      title: updatedRanking.title
    });

    return NextResponse.json({
      success: true,
      data: updatedRanking,
      message: "Ranking updated successfully"
    });

  } catch (error) {
    console.error("[AdminRankingsAPI] Failed to update ranking", { error, id: params.id });
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update ranking",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/rankings/[id]
 *
 * Soft delete a ranking by ID
 *
 * Path Parameters:
 * - id: string - The ranking ID to delete
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    console.log("[AdminRankingsAPI] DELETE - Deleting ranking", { id });

    // Validate ID format
    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid ranking ID",
          message: "A valid ranking ID is required"
        },
        { status: 400 }
      );
    }

    // Check if ranking exists before deleting
    const existingRanking = await rankingService().getRankingById(id);
    if (!existingRanking) {
      console.log("[AdminRankingsAPI] Ranking not found for deletion", { id });
      return NextResponse.json(
        {
          success: false,
          error: "Ranking not found",
          message: `No ranking found with id: ${id}`
        },
        { status: 404 }
      );
    }

    // Delete ranking through service layer (soft delete)
    await rankingService().deleteRanking(id);

    console.log("[AdminRankingsAPI] Ranking deleted successfully", { id });

    return NextResponse.json({
      success: true,
      message: "Ranking deleted successfully"
    });

  } catch (error) {
    console.error("[AdminRankingsAPI] Failed to delete ranking", { error, id: params.id });
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete ranking",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      },
      { status: 500 }
    );
  }
}