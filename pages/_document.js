import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// const Chart = dynamic(() => import(''), { ssr: false });
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://js.recurly.com/v4/recurly.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
