import { NextRequest, NextResponse } from "next/server";
import { rankingService } from "@/lib/factories/serviceFactory";
import { applySecurityMiddleware, getAuthenticatedUserId } from "@/lib/middleware/auth";

/**
 * GET /api/admin/rankings
 *
 * Retrieve all rankings with optional pagination and search
 *
 * Query Parameters:
 * - page: Page number (default: 1)
 * - limit: Items per page (default: 10)
 * - search: Search term for title/description filtering
 */
export async function GET(request: NextRequest) {
  try {
    // Apply security middleware
    const authResult = await applySecurityMiddleware(request);
    if (authResult) return authResult;

    console.log("[AdminRankingsAPI] GET - Retrieving all rankings");

    // Get search parameters from URL
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    // Get all rankings through service layer
    const rankings = await rankingService().getAllRankings();

    // Apply client-side filtering for search functionality
    const filteredRankings = search
      ? rankings.filter(ranking =>
          ranking.title.toLowerCase().includes(search.toLowerCase()) ||
          ranking.description.toLowerCase().includes(search.toLowerCase())
        )
      : rankings;

    // Simple pagination implementation
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedRankings = filteredRankings.slice(startIndex, endIndex);

    console.log("[AdminRankingsAPI] Rankings retrieved successfully", {
      total: filteredRankings.length,
      page,
      limit,
      returned: paginatedRankings.length,
      searchTerm: search || "none"
    });

    return NextResponse.json({
      success: true,
      data: paginatedRankings,
      pagination: {
        current: page,
        total: Math.ceil(filteredRankings.length / limit),
        count: filteredRankings.length
      }
    });
  } catch (error) {
    console.error("[AdminRankingsAPI] Failed to retrieve rankings", { error });
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve rankings",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/rankings
 *
 * Create a new ranking
 *
 * Body Parameters:
 * - title: string (required) - Ranking title
 * - description: string (required) - Ranking description
 * - isActive: boolean (optional) - Whether ranking is active
 * - allowSuggestions: boolean (optional) - Whether suggestions are allowed
 * - cycleLength: number (optional) - Cycle length in days
 */
export async function POST(request: NextRequest) {
  try {
    // Apply security middleware
    const authResult = await applySecurityMiddleware(request);
    if (authResult) return authResult;

    console.log("[AdminRankingsAPI] POST - Creating new ranking");

    const body = await request.json();
    const { title, description, isActive, allowSuggestions, cycleLength } = body;

    // Validate required fields
    if (!title || !description) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          message: "Title and description are required fields"
        },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (title.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid title length",
          message: "Title must be less than 100 characters"
        },
        { status: 400 }
      );
    }

    if (description.length > 500) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid description length",
          message: "Description must be less than 500 characters"
        },
        { status: 400 }
      );
    }

    // Get authenticated user ID
    const authorId = getAuthenticatedUserId(request);
    if (!authorId) {
      return NextResponse.json(
        {
          success: false,
          error: "Authentication required",
          message: "Unable to determine authenticated user"
        },
        { status: 401 }
      );
    }

    // Create new ranking through service layer
    const newRanking = await rankingService().createRanking({
      title,
      description,
      isActive: isActive || false,
      allowSuggestions: allowSuggestions || false,
      cycleLength: cycleLength || 30,
      authorId
    });

    console.log("[AdminRankingsAPI] Ranking created successfully", {
      id: newRanking.id,
      title: newRanking.title
    });

    return NextResponse.json({
      success: true,
      data: newRanking,
      message: "Ranking created successfully"
    }, { status: 201 }); // 201 Created

  } catch (error) {
    console.error("[AdminRankingsAPI] Failed to create ranking", { error });
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create ranking",
        message: error instanceof Error ? error.message : "Unknown error occurred"
      },
      { status: 500 }
    );
  }
}