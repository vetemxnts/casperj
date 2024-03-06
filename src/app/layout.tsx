import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CASPERJ | Kacper Jeznach",
  description: "I am a web developer from Warsaw, Poland.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
