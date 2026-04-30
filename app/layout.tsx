import { Space_Grotesk, Inter } from 'next/font/google';
import "./globals.scss"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['700'] 
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

