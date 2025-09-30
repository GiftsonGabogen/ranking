import { NextRequest, NextResponse } from "next/server";

/**
 * Admin Authentication Middleware
 *
 * Provides authentication and authorization for admin-only API endpoints.
 * This is a simplified implementation for demo purposes.
 * In production, this should integrate with a proper auth system like better-auth.
 */

// Mock admin users for demo purposes
const ADMIN_USERS = [
  { id: "admin-1", email: "admin@example.com", role: "admin" },
  { id: "admin-2", email: "superadmin@example.com", role: "superadmin" }
];

/**
 * Get authenticated user ID from request
 * Returns the user ID if authenticated, null otherwise
 */
export function getAuthenticatedUserId(request: NextRequest): string | null {
  const adminToken = request.headers.get("x-admin-token");
  const sessionCookie = request.cookies.get("admin-session");
  const localStorageToken = request.headers.get("x-local-storage-token");

  // For demo purposes, return the existing user ID from the database
  // This user ID exists in the database from the migration script
  if (adminToken === DEMO_ADMIN_TOKEN ||
      sessionCookie?.value === "admin-session-value" ||
      localStorageToken === "demo-admin") {
    return "oFHuXdFnQKHgHEOdAs9qdDJNg9iWdpA0"; // Existing user ID from database
  }

  return null;
}

// Demo authentication token (in production, use JWT or similar)
const DEMO_ADMIN_TOKEN = "demo-admin-token";

/**
 * Admin authentication middleware
 * Validates that the request has admin privileges
 *
 * @param {NextRequest} request - The incoming request
 * @returns {NextResponse | null} Returns error response if unauthorized, null if authorized
 */
export async function adminAuth(request: NextRequest) {
  try {
    console.log("[AuthMiddleware] Checking admin authentication");

    // Method 1: Check for admin token in headers (for API calls)
    const authHeader = request.headers.get("authorization");
    const adminToken = request.headers.get("x-admin-token");

    if (adminToken === DEMO_ADMIN_TOKEN) {
      console.log("[AuthMiddleware] Admin authenticated via demo token");
      return null; // Authorized, continue processing
    }

    // Method 2: Check for session/cookie (for web interface)
    const sessionCookie = request.cookies.get("admin-session");
    if (sessionCookie?.value === "admin-session-value") {
      console.log("[AuthMiddleware] Admin authenticated via session");
      return null; // Authorized, continue processing
    }

    // Method 3: Check for local storage token (for demo)
    // This is sent from frontend in headers
    const localStorageToken = request.headers.get("x-local-storage-token");
    if (localStorageToken === "demo-admin") {
      console.log("[AuthMiddleware] Admin authenticated via localStorage");
      return null; // Authorized, continue processing
    }

    console.warn("[AuthMiddleware] Admin authentication failed - no valid credentials found");

    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized",
        message: "Admin access required. Please authenticate as an administrator."
      },
      { status: 401 }
    );

  } catch (error) {
    console.error("[AuthMiddleware] Authentication error", { error });
    return NextResponse.json(
      {
        success: false,
        error: "Authentication failed",
        message: "An error occurred during authentication"
      },
      { status: 500 }
    );
  }
}

/**
 * Rate limiting middleware
 * Prevents abuse of API endpoints by limiting request frequency
 *
 * Note: This is a simple implementation for demo purposes.
 * In production, use Redis or a dedicated rate limiting service.
 *
 * @param {NextRequest} request - The incoming request
 * @param {number} requestsPerMinute - Max requests per minute (default: 60)
 * @returns {NextResponse | null} Returns error response if rate limited, null if allowed
 */
export async function rateLimit(
  request: NextRequest,
  requestsPerMinute: number = 60
): Promise<NextResponse | null> {
  try {
    const clientIP = request.ip ||
                    request.headers.get("x-forwarded-for") ||
                    request.headers.get("x-real-ip") ||
                    "unknown";

    const userAgent = request.headers.get("user-agent") || "unknown";
    const endpoint = request.nextUrl.pathname;

    // Simple in-memory rate limiting (not production-ready)
    // In production, use Redis or similar for distributed rate limiting
    const now = Date.now();
    const minuteKey = `${clientIP}:${Math.floor(now / 60000)}`;

    // This is a mock implementation - in production, store and check request counts
    console.log("[RateLimit] Checking rate limit", {
      clientIP,
      endpoint,
      userAgent: userAgent.substring(0, 50) + "..."
    });

    // For demo purposes, just log the request
    // In production, you would:
    // 1. Check if this IP has exceeded the rate limit
    // 2. If so, return 429 Too Many Requests
    // 3. Otherwise, increment the counter

    return null; // Allow request to proceed

  } catch (error) {
    console.error("[RateLimit] Rate limiting error", { error });
    // Don't block requests on rate limiting errors
    return null;
  }
}

/**
 * Security headers middleware
 * Adds security headers to HTTP responses
 *
 * @param {NextRequest} request - The incoming request
 * @returns {NextResponse} Response with security headers added
 */
export function securityHeaders(request: NextRequest): NextResponse {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // Content Security Policy (CSP)
  response.headers.set("Content-Security-Policy", [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "form-action 'self'"
  ].join("; "));

  return response;
}

/**
 * Combined security middleware
 * Applies all security measures in sequence
 *
 * @param {NextRequest} request - The incoming request
 * @returns {NextResponse | null} Returns error response if any check fails, null if all pass
 */
export async function applySecurityMiddleware(request: NextRequest): Promise<NextResponse | null> {
  // Apply authentication
  const authResult = await adminAuth(request);
  if (authResult) return authResult;

  // Apply rate limiting
  const rateLimitResult = await rateLimit(request);
  if (rateLimitResult) return rateLimitResult;

  // Apply security headers (this modifies the response, so we handle it differently)
  // This will be applied in the route handlers

  return null; // All checks passed
}

/**
 * Helper function to check if user has admin role
 * Useful for role-based access control in business logic
 *
 * @param {NextRequest} request - The incoming request
 * @returns {boolean} True if user has admin privileges
 */
export function isAdminUser(request: NextRequest): boolean {
  const adminToken = request.headers.get("x-admin-token");
  const sessionCookie = request.cookies.get("admin-session");
  const localStorageToken = request.headers.get("x-local-storage-token");

  return adminToken === DEMO_ADMIN_TOKEN ||
         sessionCookie?.value === "admin-session-value" ||
         localStorageToken === "demo-admin";
}