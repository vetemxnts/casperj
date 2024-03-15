import type { Metadata } from "next";
import "./globals.css";

import { Noto_Sans_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "CASPERJ | Kacper Jeznach",
  description: "I am a web developer from Warsaw, Poland.",
};

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: "500"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansMono.className}>
      <body>{children}</body>
    </html>
  );
}
