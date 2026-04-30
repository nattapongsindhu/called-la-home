import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Called LA Home",
  description: "Housing program finder for LA 90029, Glendale, Burbank, and Pasadena."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
