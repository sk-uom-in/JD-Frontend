import { useSystemStore } from '@/store/systemStore';
import SystemCard from './common/SystemCard';
import StatusIndicator from './common/StatusIndicator';

export default function TurbineSystemCard() {
  const turbineSystems = useSystemStore((state) => state.turbineSystems);
  
  return (
    <SystemCard title="Turbine Systems">
      <div className="space-y-4">
        {Object.entries(turbineSystems).map(([turbineId, data]) => (
          <div key={turbineId} className="p-4 rounded bg-gray-800 border-l-4 border-purple-500">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{turbineId}</h3>
              <StatusIndicator status={data.status} />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <div>Temperature: {data.temperature.toFixed(2)}°C</div>
              <div>Pressure: {data.pressure.toFixed(2)} PSI</div>
              <div>Rotation Speed: {data.rotationSpeed.toFixed(0)} RPM</div>
              <div>Power Output: {data.powerOutput.toFixed(2)} MW</div>
            </div>
          </div>
        ))}
      </div>
    </SystemCard>
  );
}
