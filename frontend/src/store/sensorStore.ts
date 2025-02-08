import { create } from "zustand";

interface SensorData {
    temperature: number;
    pressure: number;
    powerOutput: number;
    status: string;
    alerts: string[];
}

interface SensorStore {
    sensorData: SensorData;
    setSensorData: (data: SensorData) => void;
}

export const useSensorStore = create<SensorStore>((set) => ({
    sensorData: { temperature: 0, pressure: 0, powerOutput: 0, status: "NORMAL", alerts: [] },
    setSensorData: (data) => set({ sensorData: data }),
}));
