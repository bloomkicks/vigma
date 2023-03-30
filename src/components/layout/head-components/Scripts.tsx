import Script from "next/script";

let nonce = "abshf51fhdsfdSLCHVHskfjhak4h12kjhskjdafhlkjh3424SFDha";

const Scripts = () => {
  return (
    <>
      {/* GOOGLE TAG MANAGER */}
      <Script id="google-tag-manager" nonce={nonce} defer>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMKTJ7H');`}
      </Script>
      {/* ========== */}
      {/* YANDEX METRICA */}
      <Script id="yandex-metrika" nonce={nonce} defer>
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
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
      {/* ========== */}
      {/* GOOGLE ANALYTICS (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-C6CPE1YJYN"></Script>
      <Script id="google-tag analytics" nonce={nonce} defer>
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C6CPE1YJYN');
        `}
      </Script>
      <Script id="disable-warnings">
        {"window.console.warning = function(){}"}
      </Script>
      {/* ========== */}
    </>
  );
};

export default Scripts;
