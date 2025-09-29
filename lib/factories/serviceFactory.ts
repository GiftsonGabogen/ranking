import { IRankingService } from "@/lib/interfaces/rankingInterface";
import { RankingService } from "@/lib/services/rankingService";
import { IRankingRepository } from "@/lib/interfaces/rankingInterface";
import { RankingRepository } from "@/lib/repositories/rankingRepository";

export interface ServiceContainer {
  rankingService: IRankingService;
  rankingRepository: IRankingRepository;
}

/**
 * Service Factory - Centralizes service creation and dependency injection
 *
 * This pattern allows us to:
 * 1. Easily swap implementations (e.g., JSON vs Database)
 * 2. Manage dependencies in one place
 * 3. Enable testing with mock dependencies
 * 4. Follow Single Responsibility Principle
 *
 * MIGRATION TO DATABASE:
 * When you're ready to implement the actual database, you only need to:
 * 1. Create a DatabaseRepository implementing IRankingRepository
 * 2. Update the factory to use the database repository based on environment
 * 3. The UI and service layer remain unchanged
 */
export class ServiceFactory {
  private static instance: ServiceFactory;
  private container: ServiceContainer;

  private constructor() {
    this.container = this.createContainer();
  }

  static getInstance(): ServiceFactory {
    if (!ServiceFactory.instance) {
      ServiceFactory.instance = new ServiceFactory();
    }
    return ServiceFactory.instance;
  }

  /**
   * Create the service container with all dependencies
   * This is where we can swap implementations based on environment
   */
  private createContainer(): ServiceContainer {
    console.log("Factory: Creating service container...");

    // For now, use JSON repository
    // Later we can swap to database repository based on environment
    const repository = this.createRepository();
    const service = this.createService(repository);

    return {
      rankingService: service,
      rankingRepository: repository,
    };
  }

  /**
   * Create repository based on configuration
   * This makes it easy to switch between data sources
   */
  private createRepository(): IRankingRepository {
    // For development/demo, use JSON file
    // In production, we might use database
    const useDatabase = process.env.NODE_ENV === 'production' && process.env.DATABASE_URL;

    if (useDatabase) {
      console.log("Factory: Using database repository");
      // Future: return new DatabaseRepository();
      return new RankingRepository();
    } else {
      console.log("Factory: Using JSON repository");
      return new RankingRepository();
    }
  }

  /**
   * Create service with injected repository
   */
  private createService(repository: IRankingRepository): IRankingService {
    console.log("Factory: Creating ranking service");
    return new RankingService(repository);
  }

  /**
   * Get the service container
   */
  getServices(): ServiceContainer {
    return this.container;
  }

  /**
   * Get a specific service
   */
  getRankingService(): IRankingService {
    return this.container.rankingService;
  }

  getRankingRepository(): IRankingRepository {
    return this.container.rankingRepository;
  }

  /**
   * Reset the factory (useful for testing)
   */
  reset(): void {
    this.container = this.createContainer();
  }

  /**
   * Override for testing (inject mock dependencies)
   */
  overrideContainer(container: Partial<ServiceContainer>): void {
    this.container = {
      ...this.container,
      ...container,
    };
  }
}

// Export singleton instance for easy usage
export const serviceFactory = ServiceFactory.getInstance();

// Export convenience getters
export const rankingService = () => serviceFactory.getRankingService();
export const rankingRepository = () => serviceFactory.getRankingRepository();