import type { Metadata } from "next";
import "./globals.css";
import { Inria_Serif } from "next/font/google";

const insra_serif = Inria_Serif({ weight: "300" });
export const metadata: Metadata = {
  title: "Saga Jacka - Digital Produkt Pass",
  description:
    "Digital Produkt Pass för Saga Jackan med information om hållbarhet och transparns",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={insra_serif.className}>{children}</body>
    </html>
  );
}
