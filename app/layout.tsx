import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { themeInitScript } from "@/lib/theme-script";
import { site } from "@/data/site";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Portfolio of Ramavath Santhosh, a B.Tech Computer Science and Engineering student at IIIT Vadodara, building projects in web development, exploring AI, and learning cloud computing.",
  keywords: [
    "Ramavath Santhosh",
    "IIIT Vadodara",
    "Computer Science student portfolio",
    "Web Developer",
    "MERN Stack",
  ],
  authors: [{ name: site.name }],
  metadataBase: new URL("https://ramavathsanthosh.dev"),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "B.Tech CSE student at IIIT Vadodara building projects in web development, AI, and cloud computing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} font-sans antialiased bg-bg text-fg selection:bg-accent/30`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
