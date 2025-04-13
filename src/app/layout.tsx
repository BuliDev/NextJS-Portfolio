import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alen Burovic",
  description:
    "Frontend Developer specializing in React and modern web technologies.",
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
