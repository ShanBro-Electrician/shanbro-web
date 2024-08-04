import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "ShanBro | Best Electrical and Plumbing Services in Kuala Lumpur City.",
  description:
    "Delivering best in class electrical and plumbing services at an unbeatable price!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-200 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
