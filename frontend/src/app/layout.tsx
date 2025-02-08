import WebSocketProvider from "../components/WebSocketProvider";
import "../app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <WebSocketProvider>{children}</WebSocketProvider>
            </body>
        </html>
    );
}
