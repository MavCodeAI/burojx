import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Playfair_Display, Bebas_Neue, JetBrains_Mono, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue'
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'BurojX - Creative Web Experiences That Breathe',
  description: 'Futuristic, immersive, high-end creative studio specializing in 3D web experiences, brand strategy, and creative design.',
  keywords: 'web development, 3D experiences, creative design, brand strategy, BurojX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${playfairDisplay.variable} ${bebasNeue.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} bg-black text-white font-sans antialiased transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
