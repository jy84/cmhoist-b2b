import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

export const metadata: Metadata = {
  title: 'CM한국지점 | 프리미엄 호이스트 B2B',
  description: '미군부대 공급용 방폭인증 호이스트 CM, YALE, STAHL 전문',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <AIChat />
        <Footer />
      </body>
    </html>
  );
}
