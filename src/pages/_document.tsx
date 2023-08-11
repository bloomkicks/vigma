import { Html, Head, Main, NextScript } from "next/document";
// import { mainTitle, mainDescription } from "../data/meta";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* GENERAL */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#F3CF88" />
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
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon.png"
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
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:url" content="https://www.vigmamebel.ru" />
        <meta
          property="og:site_name"
          content="Кухни на заказ в СПБ от фабрики ВИГМА Мебель"
        />
        {/* TWITTER */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content="https://www.vigmamebel.ru"
        />
        <meta name="twitter:image" content="/apple-touch-icon.png" />
        {/* ENGINES */}
        <meta name="yandex-verification" content="eaf61e3fbaf62eb9" />
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
