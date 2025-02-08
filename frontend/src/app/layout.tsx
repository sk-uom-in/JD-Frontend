import Auth0Provider from "./auth/Auth0Provider";
import WebSocketProvider from "../components/layout/WebSocketProvider";
import Link from "next/link";
import "./globals.css";
import LoginButton from "@/components/auth/LoginButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Auth0Provider>
                    <WebSocketProvider>
                        <div className="min-h-screen flex flex-col">
                            <header className="bg-[var(--secondary)] shadow-md">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex justify-between items-center h-16">
                                        <div className="flex items-center space-x-8">
                                            <h1 className="text-xl font-bold">Nuclear Safety System</h1>
                                            <nav className="flex space-x-4">
                                                <Link href="/" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                                                    Home
                                                </Link>
                                                <Link href="/pump" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                                                    Pump
                                                </Link>
                                                <Link href="/turbine" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                                                    Turbine
                                                </Link>
                                            </nav>
                                        </div>
                                        <div>
                                            <LoginButton />
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <main className="flex-grow">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                    {children}
                                </div>
                            </main>

                            <footer className="bg-[var(--secondary)] mt-auto">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                                    <p className="text-center text-sm text-[var(--text-secondary)]">
                                        Nuclear Safety Monitoring System © {new Date().getFullYear()}
                                    </p>
                                </div>
                            </footer>
                        </div>
                    </WebSocketProvider>
                </Auth0Provider>
            </body>
        </html>
    );
}