import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aero Coil",
  description: "Aero Coil",
  icons: {
    icon: "/favicon.png", // This pulls from /public/favicon.ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
