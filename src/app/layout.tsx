import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "A MKS Sistemas é um E-commerce online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
