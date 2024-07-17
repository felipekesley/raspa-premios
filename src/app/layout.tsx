import { Main } from "@/components/_shared/main";
import "./globals.css";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";

const fontSans = FontSans({
  weight: ["100", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Raspa Premios",
    default: "| Raspa Premios",
  },
  description: "",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <Main>{children}</Main>
      </body>
    </html>
  );
}
