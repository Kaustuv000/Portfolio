import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kaustuv-dey.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kaustuv Dey — Software Engineer",
    template: "%s · Kaustuv Dey",
  },
  description:
    "Software Engineer at Warner Bros. Discovery building scalable cloud infrastructure & data pipelines. M.Tech IT (Data Analytics) at NIT Jalandhar.",
  keywords: [
    "Kaustuv Dey",
    "Software Engineer",
    "Warner Bros. Discovery",
    "Cloud Infrastructure",
    "Data Engineering",
    "NIT Jalandhar",
    "Portfolio",
  ],
  authors: [{ name: "Kaustuv Dey", url: siteUrl }],
  creator: "Kaustuv Dey",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kaustuv Dey",
    title: "Kaustuv Dey — Software Engineer",
    description:
      "Software Engineer at Warner Bros. Discovery building scalable cloud infrastructure & data pipelines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#101012" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (preferLight ? 'light' : 'dark');
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <CursorGlow />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
