'use client';

import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="space-y-6">
      {!isAuthenticated ? (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Welcome to Nuclear Safety System</h2>
          <p className="text-[var(--text-secondary)] mb-4">
            Please log in to access the monitoring dashboard and sensor data.
          </p>
        </div>
      ) : (
        <ProtectedRoute>
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Welcome to the Dashboard</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              Select Pump or Turbine from the navigation to view specific monitoring data.
            </p>
          </div>
        </ProtectedRoute>
      )}
    </div>
  );
}