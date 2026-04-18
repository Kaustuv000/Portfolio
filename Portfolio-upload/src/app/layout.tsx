import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaustuv Dey — Software Engineer",
  description:
    "Portfolio of Kaustuv Dey — Software Engineer, M.Tech student, and builder of scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
