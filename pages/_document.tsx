import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='h-full'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Andika+New+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
