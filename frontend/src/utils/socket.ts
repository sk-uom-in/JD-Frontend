import { io } from "socket.io-client";

const socket = io("http://localhost:5000", { 
  transports: ["websocket"],
  autoConnect: true,
  reconnection: true
});

socket.on("connect_error", (error) => {
  console.log("Socket connection error:", error);
});

socket.on("connect", () => {
  console.log("Socket connected");
});

export default socket;