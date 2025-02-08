'use client';

import PumpSelector from '@/components/selectors/PumpSelector';
import Dashboard from '@/components/layout/Dashboard';
import { useSensorStore } from '@/store/sensorStore';
import { pumpSensorData } from '@/utils/mockData';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

type PumpName = keyof typeof pumpSensorData;

export default function PumpPage() {
  const { selectedPump, setSelectedPump } = useSensorStore();

  return (
    <div className="space-y-6">
      <ProtectedRoute>
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Pump Monitoring</h2>
          <div className="max-w-xs">
            <label className="block text-sm font-medium mb-2">Select Pump Sensor</label>
            <PumpSelector 
              selectedPump={selectedPump as PumpName | null} 
              setSelectedPump={setSelectedPump}
            />
          </div>
        </div>

        {selectedPump ? (
          <div className="card">
            <Dashboard />
          </div>
        ) : (
          <div className="card">
            <p className="text-[var(--text-secondary)]">
              Please select a pump to view its monitoring data.
            </p>
          </div>
        )}
      </ProtectedRoute>
    </div>
  );
}