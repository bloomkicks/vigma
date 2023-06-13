import { Html, Head, Main, NextScript } from "next/document";
const title =
  "Кухни На Заказ От Фабрики в СПБ - Удобство и стиль для вашего дома - Вигма Мебель";
const description =
  "Кухни от производителя в СПБ и Лен. области - Дизайн-проект, консультация специалистов и гарантия 3 года в подарок - Быстрое производство и доставка от 14 дней";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* GENERAL */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <meta name="theme-color" content="#F3CF88" />
        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Playfair+Display:wght@700&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* LINKS */}
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:url" content="https://www.vigmamebel.ru" />
        <meta
          property="og:site_name"
          content="Кухни от фабрики Вигма Мебель"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* TWITTER */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content="https://www.vigmamebel.ru"
        />
        <meta name="twitter:image" content="/apple-touch-icon.png" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="yandex-verification" content="eaf61e3fbaf62eb9" />
        {/* ENGINES */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
