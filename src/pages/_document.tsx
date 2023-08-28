import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* GENERAL */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#F3CF88" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&family=Playfair+Display:wght@700&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* LINKS */}
        <link
          rel="icon"
          sizes="128x128"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          sizes="128x128"
          type="image/png"
          href="/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          type="image/png"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          type="image/png"
          href="/google-chrome-192x192.png"
        />
        <link
          rel="icon"
          sizes="64x64"
          type="image/png"
          href="/favicon-64x64.png"
        />
        <link
          rel="icon"
          sizes="48x48"
          type="image/png"
          href="/favicon-48x48.png"
        />
        {/* FACEBOOK */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Кухни на заказ в СПБ от фабрики ВИГМА Мебель"
        />
        <meta
          property="og:description"
          content="Кухни на заказ от производителя в СПБ и Лен. области - Долговечные кухни из 1000+ материалов и цветов - Бесплатный дизайн-проект, консультацию и подарок на ваш выбор - Быстрое производство и доставка"
        />
        <meta property="og:url" content="https://www.vigmamebel.ru" />
        <meta
          property="og:image"
          content="/google-chrome-192x192.png"
        />
        {/* TWITTER */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@vigma" />
        <meta
          name="twitter:title"
          content="Кухни на заказ в СПБ от фабрики ВИГМА Мебель"
        />
        <meta
          name="twitter:description"
          content="Кухни на заказ от производителя в СПБ и Лен. области - Долговечные кухни из 1000+ материалов и цветов - Бесплатный дизайн-проект, консультацию и подарок на ваш выбор - Быстрое производство и доставка"
        />
        <meta
          name="twitter:image"
          content="/google-chrome-192x192.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
