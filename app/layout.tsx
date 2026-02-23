import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUITIAN — Official",
  description: "Official site of LUITIAN — Chilean electronic artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
