"use client";
import { useEffect } from "react";
import socket from "@/utils/socket";
import { useSystemStore } from "@/store/systemStore";
import { generateMockData } from "@/utils/mockSystemData";

export default function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const updateSystemData = useSystemStore((state) => state.updateSystemData);

  useEffect(() => {
    // For development: simulate real-time updates with mock data
    const interval = setInterval(() => {
      const mockData = generateMockData();
      updateSystemData(mockData);
    }, 5000);

    // For production: listen to real WebSocket updates
    socket.on("system_update", (data) => {
      updateSystemData(data);
    });

    return () => {
      clearInterval(interval);
      socket.off("system_update");
    };
  }, [updateSystemData]);

  return <>{children}</>;
}