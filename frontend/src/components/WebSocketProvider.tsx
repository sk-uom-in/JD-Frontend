"use client";
import { useEffect } from "react";
import socket from "../utils/socket";
import { useSensorStore } from "../store/sensorStore";

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
    const setSensorData = useSensorStore((state) => state.setSensorData);

    useEffect(() => {
        socket.on("sensor_update", (data) => {
            setSensorData(data);
        });

        return () => {
            socket.off("sensor_update");
        };
    }, [setSensorData]);

    return <>{children}</>;
};

export default WebSocketProvider;
