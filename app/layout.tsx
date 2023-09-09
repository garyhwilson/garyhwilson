import './scss/global.scss';
import type { Metadata } from 'next';
import PrimaryNav from './components/PrimaryNav';
import ProfilePic from './components/ProfilePic';

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
      <body className="stack center">
        <div className="wrapper">
          <PrimaryNav />
          <ProfilePic />
          {children}
        </div>
      </body>
    </html>
  );
}
