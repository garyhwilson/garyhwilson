import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PrimaryNav from './components/PrimaryNav';
import ProfilePic from './components/ProfilePic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gary H. Wilson',
  description: 'Snerp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimaryNav />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
