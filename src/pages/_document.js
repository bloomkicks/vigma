import Script from "next/script";
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
          {/* Google Tag Manager */}
          <Script id="google-tag">{`(
            function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMKTJ7H'
          )`}</Script>
          {/* End Google Tag Manager */}
          {/* ENGINES */}
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="/sitemap.xml"
          />
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
          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&family=Rubik:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          {/* REGULAR TAGS */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#79b57f" />
          <meta name="description" content={description} />
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
          {/* Google tag (gtag.js) */}
          <Script
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-C6CPE1YJYN"
          ></Script>
          <Script strategy="lazyOnload" id="google-tag">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C6CPE1YJYN');
            `}
          </Script>
          {/* Google tag (gtag.js) */}
          {/* Yandex.Metrika counter */}
          <Script strategy="lazyOnload" id="yandex-metrika">
            {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(90359214, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
            })
            `}
          </Script>
          {/* Yandex.Metrika counter */}
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MMKTJ7H"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
