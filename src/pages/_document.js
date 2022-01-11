import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {/* REGULAR TAGS */}
          <meta charSet="utf-8" />
          <link rel="icon" href="/icon.ico" />
          <meta name="theme-color" content="#444c78" />
          <meta
            name="description"
            content="Качественная и недорогая мебель на заказ в CПб и Лен. области. Закажите у нас и мы доставим и установим любую мебель быстро и ..."
          />
          <link rel="manifest" href="/manifest.json" />
          <title>
            Мебель На Заказ От Производителя Vigma - Недорого, Качественно,
            Быстро! Доставка От 4-и Дней
          </title>
          {/* OPEN GRAPH */}
          <meta
            property="og:title"
            content=" Мебель На Заказ От Производителя Vigma - Недорого, Качественно, Быстро! Доставка От 4-и Дней "
          />
          <meta property="og:image" content="/logos/mini_blue.jpg" />
          <meta property="og:site_name" content="Vigma" />
          <meta
            property="og:description"
            content="Качественная и недорогая мебель на заказ в CПб и Лен. области. Закажите у нас и мы доставим и установим любую мебель быстро и ..."
          />

          {/* TWITTER */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@vigma" />
          <meta
            name="twitter:title"
            content=" Мебель На Заказ От Производителя Vigma - Недорого, Качественно, Быстро! Доставка От 4-и Дней "
          />
          <meta name="twitter:image" content="/logos/mini_blue.jpg" />
          <meta
            name="og:description"
            content="Качественная и недорогая мебель на заказ в CПб и Лен. области. Закажите у нас и мы доставим и установим любую мебель быстро и ..."
          />
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
