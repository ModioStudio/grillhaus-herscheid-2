import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Grillhaus Herscheid - Griechisches Grill-Restaurant mit 4,8★ Bewertung",
  description:
    "Griechischer Grillhaus in Herscheid. Gyros, Grill & Klassiker – frisch, schnell, ehrlich. Seit Jahren bewertet mit 4,8 Sternen von über 500 Kunden.",
  keywords: ["Griechischer Grillhaus Herscheid", "Gyros Herscheid", "Grillhaus", "Griechisches Restaurant"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#0F0F0F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
