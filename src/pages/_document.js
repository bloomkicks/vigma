import Document, {Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="/icon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#444c78" />
          <meta
            name="description"
            content="Качественная и недорогая мебель на заказ в CПб и Лен. области. Закажите у нас и мы доставим и установим любую мебель быстро и ..."
          />
          <link rel="manifest" href="/manifest.json" />
          <title>
            Мебель На Заказ От Производителя Vigma - Недорого, Качественно, Быстро! Доставка От 5-и Дней
          </title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument