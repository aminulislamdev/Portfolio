import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aminul-seven.vercel.app"),
  title: {
    default: "Md. Aminul Islam Mahi | Full Stack Developer",
    template: "%s | Md. Aminul Islam Mahi",
  },
  description:
    "Portfolio of Md. Aminul Islam Mahi, a Full Stack Developer from Bangladesh specializing in React, Next.js, and TypeScript. Currently pursuing a Diploma in CST.",
  keywords: [
    "Md. Aminul Islam Mahi",
    "Aminul Islam",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Software Engineer",
    "Bangladesh",
    "Junior Developer",
  ],
  authors: [{ name: "Md. Aminul Islam Mahi", url: "https://github.com/aminulislamdev" }],
  creator: "Md. Aminul Islam Mahi",
  publisher: "Md. Aminul Islam Mahi",
  alternates: {
    canonical: "https://aminul-seven.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aminul-seven.vercel.app",
    title: "Md. Aminul Islam Mahi | Full Stack Developer",
    description:
      "Building modern web applications with React, Next.js, and Node.js. Explore real-world projects and verified credentials.",
    siteName: "Md. Aminul Islam Mahi Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Md. Aminul Islam Mahi - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Aminul Islam Mahi | Full Stack Developer",
    description:
      "Building modern web applications with React, Next.js, and Node.js. Explore real-world projects and verified credentials.",
    images: ["/profile.jpg"],
    creator: "@aminulislamdev",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}