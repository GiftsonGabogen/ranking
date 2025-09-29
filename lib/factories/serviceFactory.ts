import { IRankingService } from "@/lib/interfaces/rankingInterface";
import { RankingService } from "@/lib/services/rankingService";
import { IRankingRepository } from "@/lib/interfaces/rankingInterface";
import { RankingRepository } from "@/lib/repositories/rankingRepository";
import { DatabaseRepository } from "@/lib/repositories/databaseRepository";

/**
 * Container interface that holds all our services
 * This makes it easy to manage and inject dependencies
 */
export interface ServiceContainer {
  rankingService: IRankingService;        // Business logic for rankings
  rankingRepository: IRankingRepository;  // Data access layer for rankings
}

/**
 * Service Factory - Centralizes service creation and dependency injection
 *
 * RESPONSIBILITIES:
 * - Implements Singleton pattern to ensure single instance across the app
 * - Manages dependency injection between services and repositories
 * - Provides environment-based configuration switching
 * - Enables easy testing through dependency overrides
 *
 * DESIGN BENEFITS:
 * 1. Easy to swap implementations (JSON vs Database repositories)
 * 2. Centralized dependency management
 * 3. Test-friendly design with mock injection capabilities
 * 4. Follows Single Responsibility Principle
 * 5. Implements Factory pattern for clean object creation
 *
 * USAGE:
 * - Import serviceFactory to get services
 * - Set USE_DATABASE_REPOSITORY=true to test database backend
 * - Use overrideContainer() for testing with mocks
 */
export class ServiceFactory {
  private static instance: ServiceFactory;  // Singleton instance
  private container: ServiceContainer;     // Holds all service instances

  /**
   * Private constructor - initializes the service container
   * This ensures only one instance can be created (Singleton pattern)
   */
  private constructor() {
    this.container = this.createContainer();
  }

  /**
   * Get the singleton instance of ServiceFactory
   * Creates the instance if it doesn't exist yet
   *
   * @returns {ServiceFactory} The singleton instance
   */
  static getInstance(): ServiceFactory {
    if (!ServiceFactory.instance) {
      ServiceFactory.instance = new ServiceFactory();
    }
    return ServiceFactory.instance;
  }

  /**
   * Create the service container with all dependencies
   * This is the core factory method that creates and wires up all services
   *
   * PROCESS:
   * 1. Determines which repository implementation to use (JSON vs Database)
   * 2. Creates the repository instance
   * 3. Injects the repository into the service
   * 4. Returns the complete service container
   *
   * @returns {ServiceContainer} Container with all initialized services
   */
  private createContainer(): ServiceContainer {
    console.log("Factory: Creating service container...");

    // Create repository based on environment configuration
    const repository = this.createRepository();

    // Inject repository into service (Dependency Injection pattern)
    const service = this.createService(repository);

    return {
      rankingService: service,        // Service layer with business logic
      rankingRepository: repository,  // Data access layer
    };
  }

  /**
   * Create repository based on environment configuration
   * This enables seamless switching between data storage implementations
   *
   * CONFIGURATION:
   * - USE_DATABASE_REPOSITORY=true: Uses PostgreSQL database via Drizzle ORM
   * - USE_DATABASE_REPOSITORY=false or undefined: Uses JSON file storage
   *
   * @returns {IRankingRepository} Configured repository instance
   */
  private createRepository(): IRankingRepository {
    // Environment variable controls which backend to use
    const useDatabase = process.env.USE_DATABASE_REPOSITORY === 'true';

    if (useDatabase) {
      console.log("Factory: Using database repository (PostgreSQL)");
      return new DatabaseRepository();  // Real database backend
    } else {
      console.log("Factory: Using JSON repository (file storage)");
      return new RankingRepository();  // File-based storage for development
    }
  }

  /**
   * Create service with injected repository (Dependency Injection)
   * This demonstrates the Dependency Inversion Principle - the service
   * depends on the interface, not the concrete implementation
   *
   * @param {IRankingRepository} repository - The data access layer to inject
   * @returns {IRankingService} Configured service instance
   */
  private createService(repository: IRankingRepository): IRankingService {
    console.log("Factory: Creating ranking service with repository injection");
    return new RankingService(repository);  // Inject repository dependency
  }

  /**
   * Get the complete service container
   * Useful for accessing all services at once
   *
   * @returns {ServiceContainer} Container with all services
   */
  getServices(): ServiceContainer {
    return this.container;
  }

  /**
   * Get the ranking service instance
   * Convenience method for direct service access
   *
   * @returns {IRankingService} The ranking service instance
   */
  getRankingService(): IRankingService {
    return this.container.rankingService;
  }

  /**
   * Get the ranking repository instance
   * Useful for direct data access operations
   *
   * @returns {IRankingRepository} The ranking repository instance
   */
  getRankingRepository(): IRankingRepository {
    return this.container.rankingRepository;
  }

  /**
   * Reset the factory and recreate all services
   * Primarily useful for testing scenarios where you need fresh instances
   * Also useful when changing environment variables at runtime
   */
  reset(): void {
    console.log("Factory: Resetting service container");
    this.container = this.createContainer();
  }

  /**
   * Override the service container with mock dependencies
   * Essential for testing - allows injecting mock services and repositories
   *
   * @param {Partial<ServiceContainer>} container - Partial container with mock services
   *
   * @example
   * // Override with mock repository for testing
   * serviceFactory.overrideContainer({
   *   rankingRepository: new MockRepository()
   * });
   */
  overrideContainer(container: Partial<ServiceContainer>): void {
    console.log("Factory: Overriding service container (likely for testing)");
    this.container = {
      ...this.container,        // Keep existing services
      ...container,            // Override with provided mocks
    };
  }
}

// Export singleton instance for easy usage throughout the application
export const serviceFactory = ServiceFactory.getInstance();

// Export convenience getters for cleaner import statements
// These functions provide direct access to services without needing to call the factory
export const rankingService = () => serviceFactory.getRankingService();
export const rankingRepository = () => serviceFactory.getRankingRepository();

/**
 * USAGE EXAMPLES:
 *
 * // Basic usage - get service instance
 * const service = rankingService();
 * const rankings = await service.getAllRankings();
 *
 * // Testing - override with mock repository
 * serviceFactory.overrideContainer({
 *   rankingRepository: new MockRepository()
 * });
 *
 * // Environment switching - set in .env file
 * // USE_DATABASE_REPOSITORY=true (uses PostgreSQL)
 * // USE_DATABASE_REPOSITORY=false or undefined (uses JSON files)
 */