import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import "@/shared-styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel App",
  description: "See all the Marvel characters and comics!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
