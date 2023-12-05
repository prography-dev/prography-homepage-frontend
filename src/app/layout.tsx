import '../styles/global.css';
import '../styles/fonts.scss';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <head>
      <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
          {props.children}
      </body>
    </html>
  );
}
