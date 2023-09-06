import './scss/global.scss';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import PrimaryNav from './components/PrimaryNav';
import ProfilePic from './components/ProfilePic';

const font = Montserrat({ subsets: ['latin'] });

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
      <body className={`${font.className} stack center`}>
        <PrimaryNav />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
