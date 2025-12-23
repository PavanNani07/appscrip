import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Product listing page with the best deals on various products." />
        <meta name="keywords" content="Products, Shopping, Best Deals, E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product Listing - Find Best Deals</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
