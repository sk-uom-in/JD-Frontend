"use client";

import { pumpSensorData } from '../../utils/mockData';
import type { PumpName } from '../../store/sensorStore';

interface PumpSelectorProps {
  selectedPump: PumpName | null;
  setSelectedPump: (pump: PumpName | null) => void;
}

export default function PumpSelector({ selectedPump, setSelectedPump }: PumpSelectorProps) {
  const pumpSensors = Object.keys(pumpSensorData) as PumpName[];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as PumpName;
    setSelectedPump(value || null);
  };

  return (
    <select
      value={selectedPump || ""}
      onChange={handleChange}
      className="w-full p-2 bg-gray-700 text-white rounded-lg"
    >
      <option value="">Select a Pump Sensor</option>
      {pumpSensors.map((sensor) => (
        <option key={sensor} value={sensor}>
          {sensor}
        </option>
      ))}
    </select>
  );
}