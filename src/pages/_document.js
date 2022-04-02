import Document, { Html, Head, Main, NextScript } from "next/document";

const title = "Мебель на Заказ от Производителя в СПб - Vigma/Вигма";
const description =
  "Недорогая корпусная мебель по индивидуальным размерам. Быстрое производство и доставка от 4 дней.  Широкий ассортимент - кухни, шкафы, кровати, прихожие ...";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/logos/mini_new.svg" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
            rel="stylesheet"
          />
          {/* REGULAR TAGS */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#444c78" />
          <title>{title}</title>
          <meta name="description" content={description} />
          {/* OPEN GRAPH */}
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/logos/mini_blue.jpg" />
          <meta property="og:url" content="vigmamebel.ru" />
          <meta property="og:site_name" content="Мебель на Заказ" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* TWITTER */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@vigmamebel.ru" />
          <meta name="twitter:image" content="/logos/mini_blue.jpg" />
          <meta name="twitter:title" content={title} />
          <meta name="og:description" content={description} />
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
