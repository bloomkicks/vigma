const YandexMap = () => {
  return (
    <div className="w-full h-[280px] md:w-[55%] max-w-[410px] md:h-[300px] md:mr-[36px] lg:mr-[64px] relative z-10">
      <iframe
        title="Мы на Yandex Картах"
        tabIndex={-1}
        src="https://yandex.com/map-widget/v1/?z=12&ol=biz&oid=93431171837"
        frameBorder="0"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          border: "1px solid black",
        }}
      ></iframe>
    </div>
  );
};

export default YandexMap;
