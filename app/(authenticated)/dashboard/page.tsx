import React from "react";

export default function Dashboard() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Welcome to your Dashboard!
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Here's what's happening with your rankings today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 rounded-lg">
            <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
              Total Rankings
            </h3>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              24
            </p>
          </div>

          <div className="p-4 bg-success-50 dark:bg-success-950/50 border border-success-200 dark:border-success-800 rounded-lg">
            <h3 className="font-semibold text-success-900 dark:text-success-100 mb-2">
              Active Projects
            </h3>
            <p className="text-2xl font-bold text-success-600 dark:text-success-400">
              5
            </p>
          </div>

          <div className="p-4 bg-warning-50 dark:bg-warning-950/50 border border-warning-200 dark:border-warning-800 rounded-lg">
            <h3 className="font-semibold text-warning-900 dark:text-warning-100 mb-2">
              Pending Reviews
            </h3>
            <p className="text-2xl font-bold text-warning-600 dark:text-warning-400">
              3
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}