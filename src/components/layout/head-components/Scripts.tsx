import Script from "next/script";

const Scripts = () => {
  return (
    <>
      {/* GOOGLE TAG MANAGER */}
      <Script id="google-tag-manager" defer>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMKTJ7H');
        `}
      </Script>
      {/* ========== */}
      {/* YANDEX METRICA */}
      <Script type="text/javascript" id="yandex-metrika" defer>
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(90359214, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });
        `}
      </Script>
      {/* ========== */}
      {/* GOOGLE ANALYTICS (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C6CPE1YJYN"
      ></Script>
      <Script id="google-analytics" defer>
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
