import Document, { Html, Head, Main, NextScript } from "next/document";

const title = process.env.MAIN_TITLE;
const description = process.env.MAIN_DESCRIPTION;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="manifest" href="./manifest.json" />
          {/* LOGOS */}
          <link rel="icon" sizes="any" href="./favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./favicon-32x32.png"
          />
          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Roboto:ital,wght@0,400;0,500;1,400&family=Rubik:wght@600&display=swap"
            rel="stylesheet"
          />
          {/* REGULAR TAGS */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#444c78" />
          <meta name="description" content={description} />
          {/* OPEN GRAPH */}
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={process.env.LOGOS_ASSETS + "/mini_new.jpg"}
          />
          <meta property="og:url" content="vigmamebel.ru" />
          <meta property="og:site_name" content="Мебель на Заказ" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* TWITTER */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@vigmamebel.ru" />
          <meta
            name="twitter:image"
            content={process.env.LOGOS_ASSETS + "/mini_new.jpg"}
          />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
