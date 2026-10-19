import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Md. Aminul Islam Mahi | Aspiring Full Stack Developer",
  description: "Portfolio of Md. Aminul Islam Mahi, a Full Stack Developer from Bangladesh specializing in React, Next.js, and TypeScript. Currently pursuing a Diploma in CST.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Frontend Developer", "Bangladesh"],
  authors: [{ name: "Md. Aminul Islam Mahi", url: "https://github.com/aminulislamdev" }],
  openGraph: {
    title: "Md. Aminul Islam Mahi | Full Stack Developer",
    description: "Building modern web applications with React, Next.js, and Node.js.",
    url: "https://aminul-portfolio.vercel.app", // আপনার ডেপ্লয় করা লিংক
    siteName: "Aminul Islam Portfolio",
    images: [
      {
        url: "/og-image.jpg", // public ফোল্ডারে একটি og-image.jpg রাখতে হবে
        width: 1200,
        height: 630,
        alt: "Aminul Islam Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}