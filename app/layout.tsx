import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adiba Arooj | Resume",
  description: "Resume of Adiba Arooj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
