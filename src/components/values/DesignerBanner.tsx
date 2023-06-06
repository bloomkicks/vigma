const DesignerBanner = () => {
  return (
    <div className="mx-auto w-full bg-primary-light px-[30px] py-8 rounded-4 shadow-strong relative z-10">
      <img
        src="/images/general/long-arrow-right.svg"
        alt="Вперед"
        className="w-[25px] h-auto absolute top-[23px] right-[30px] body2 -z-10"
      />
      <b className="block heading mb-1.5">Это бесплатно!</b>
      <p className="subtitle1">
        Вызвать дизайнера с 250+ образцами материалов
      </p>
    </div>
  );
};

export default DesignerBanner;
