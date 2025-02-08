import { io } from "socket.io-client";

const socket = io("http://localhost:5000", { transports: ["websocket"] });

export const sendSensorSelection = (sensorType: string, sensorName: string) => {
    socket.emit("sensor_selection", { type: sensorType, name: sensorName });
};

export default socket;
