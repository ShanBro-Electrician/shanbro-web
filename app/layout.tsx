import type { Metadata } from "next";
import { Nunito, Inter as Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const fontDisplay = Nunito({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ShanBro | Best Electrical and Plumbing Services",
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
