import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";


const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavoru",
  description: "Kavoru helps you track emotions and predict your future moods with kindness and insight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
