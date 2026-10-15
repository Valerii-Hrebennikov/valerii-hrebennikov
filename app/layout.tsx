import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Onest, Unbounded } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin", "cyrillic"], variable: "--font-body" });
const unbounded = Unbounded({ subsets: ["latin", "cyrillic"], variable: "--font-display", weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Валерій Гребенніков — Front-End розробник",
  description: "Сайти й застосунки на React, Next.js та React Native. Портфоліо, досвід, контакти.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk" className={`${onest.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}