import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700']
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'The Barber,s Chamber | Premium Grooming in Islamabad',
  description:
    'The Barber,s Chamber in E-11/2 Markaz Islamabad. Modern grooming services, premium styling, and professional barber care.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} font-[var(--font-manrope)]`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
