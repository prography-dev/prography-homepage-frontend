import Script from 'next/script';

import '../styles/global.css';
import '../styles/fonts.scss';
import '../styles/colors.scss';
import '../styles/responsiveFonts.scss';

import Footer from '@/components/Layout/footer/Footer';
import Header from '@/components/Layout/header/Header';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-gov-dynamic-subset.min.css"
        />
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          as="style"
          crossOrigin=""
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.ico" />
        <meta
          name="description"
          content="디자이너와 개발자가 함께 즐겁게 성장하는 커뮤니티, Prography"
        />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="프로그라피" />
        <meta
          property="og:description"
          content="디자이너와 개발자가 함께 즐겁게 성장하는 커뮤니티, Prography"
        />
        <meta property="og:title" content="프로그라피" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L99YNJCVMW"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-L99YNJCVMW');
        `}
        </Script>
        <title>Prography</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
