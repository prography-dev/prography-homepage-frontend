
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
          {props.children}
      </body>
    </html>
  );
}
