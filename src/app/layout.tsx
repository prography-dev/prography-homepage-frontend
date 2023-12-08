import '../styles/global.css';
import '../styles/fonts.scss';
import '../styles/colors.scss';

import Footer from '@/components/Layout/Footer';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
