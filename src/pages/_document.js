import Document, { Html, Head, Main, NextScript } from "next/document";

import {
  mainTitle as title,
  mainDescription as description,
} from "../data/general/page-meta";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {/* ENGINES */}
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
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@500&family=Raleway:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          {/* REGULAR TAGS */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#79b57f" />
          <meta name="description" content={description} />
          <link rel="manifest" href="/manifest.json" />
          {/* LOGOS */}
          <link rel="icon" sizes="any" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          {/* OPEN GRAPH */}
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/apple-touch-icon.png" />
          <meta property="og:url" content="https://www.vigmamebel.ru" />
          <meta property="og:site_name" content="Мебель на Заказ" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* TWITTER */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="https://www.vigmamebel.ru" />
          <meta name="twitter:image" content="/apple-touch-icon.png" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="yandex-verification" content="eaf61e3fbaf62eb9" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/90359214"
                style={{ position: "absolute", left: -9999 }}
                alt=""
              />
            </div>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MMKTJ7H"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
