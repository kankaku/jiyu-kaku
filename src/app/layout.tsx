import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiyu Kaku",
  description: "Fresh Next.js 16 baseline configured for local development and Vercel deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-950 antialiased">{children}</body>
    </html>
  );
}
