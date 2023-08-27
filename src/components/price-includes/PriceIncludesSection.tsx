import GiftBanner from "../ui/GiftBanner";
const covered = [
  "Все корпусы и фасады шкафов и тумб кухни",
  "Столешница, фартук и другие компоненты кухни",
  "Фурнитура, ручки шкафов, планки для ящиков, сушка",
  "36 месяцев гарантии на все компоненты кухни",
];

const PriceIncludesSection = () => {
  return (
    <section className="section-dark md:!px-[150px]">
      <h2 className="heading mb-5 lg:mb-[44px]">
        В стоимость входит:
      </h2>
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:mr-[-52px] lg:mb-[-40px]">
        {covered.map((cover, i) => (
          <div
            className="text-left flex flex-row justify-start items-center space-x-3.5 mb-3.5 lg:w-[44%] lg:space-x-5 lg:mr-[52px] lg:mb-[40px] lg:max-w-[385px]"
            key={i}
          >
            <img
              src="/images/price-explain/checkmark.svg"
              alt=""
              className="w-6 h-auto lg:w-9"
            />
            <p className="leading-[1.5]">{cover}</p>
          </div>
        ))}
      </div>
      <GiftBanner
        title="А также вы получите бесплатный подарок на выбор:"
        styles="mt-[22px] lg:mt-[48px] md:flex md:flex-col md:justify-start md:items-center md:space-y-1"
      />
    </section>
  );
};

export default PriceIncludesSection;
