import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.scss";
import { NavProvider } from "@/context/NavContext";
import { SidebarNav } from "@/components/SidebarNav/SidebarNav";
import Navbar from "@/components/Navbar/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <NavProvider>
          <Navbar />
          <div className="body_container">
            <SidebarNav />

            <main className="flex-1 ml-[280px] bg-[var(--surface-lowest)]">
              {children}
            </main>
          </div>
        </NavProvider>
      </body>
    </html>
  );
}
