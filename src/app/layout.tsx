import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mining Magazine - Global Minerals, Equipment & Clean Technology Journal",
  description: "The authoritative digital publication covering mineral exploration, autonomous heavy extraction equipment, green mining technologies, and global commodity markets.",
  keywords: ["mining magazine", "heavy machinery", "minerals", "lithium", "copper", "gold", "autonomous haulage", "green mining", "extraction"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#222222] font-sans antialiased overflow-x-hidden min-h-screen flex flex-col">
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
