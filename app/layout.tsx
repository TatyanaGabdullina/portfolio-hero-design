import { Oswald } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
})
export const metadata: Metadata = {
  title: "Portfolio Hero — SUNNY test",
  description: "A test page for adapting the Doodle Crew interaction to a portfolio hero.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
