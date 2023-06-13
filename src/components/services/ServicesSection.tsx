import useSlider from "@/hooks/use-slider";
import Service from "./Service";
import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import SliderProgress from "../ui/SliderProgress";

const services: {
  title: string;
  description: string;
  iconName: string;
}[] = [
  {
    title: "Проектируем",
    description:
      "Создаем индивидуальный дизайн-проект с учетом всех ваших пожеланий, а также делаем нужные замеры",
    iconName: "tools.svg",
  },
  {
    title: "Производим",
    description:
      "Опытная команда и современное оборудование гарантируют  соответствие высоким стандартам качества и точность раскроя до 0,1 мм",
    iconName: "saw.svg",
  },
  {
    title: "Доставляем",
    description:
      "В удобное для вас время мы доставим новую кухню точно по адресу и аккуратно поднимем на нужный этаж",
    iconName: "package.svg",
  },
  {
    title: "Устанавливаем",
    description:
      "Быстро и чисто установим кухню в вашей квартире, а также бесплатно подключим кухонную технику",
    iconName: "oven.svg",
  },
  {
    title: "Гарантируем",
    description:
      "Мы даем гарантию 36 месяцев на все  кухни, потому что уверены в качестве нашей продукции",
    iconName: "warranty.svg",
  },
];

const ServicesSection = () => {
  const { curIndex, moveLeftHandler, moveRightHandler, isLaptop } =
    useSlider(services.length, false, true);
  return (
    <section className="section-light">
      <h2 className="heading mb-[30px] lg:mb-[56px]">
        Делаем все, что вам надо – от производства кухни и до
        установки
      </h2>
      <div className="flex flex-row justify-center items-center -ml-1">
        <SliderControl isLeft onClick={moveLeftHandler} />
        <Slider
          curIndex={curIndex}
          itemWidth={isLaptop ? 380 : 245}
          spacing={20}
          styles="space-x-5"
          isLaptop={isLaptop}
          isTwo
        >
          {services.map((service) => (
            <Service
              title={service.title}
              iconSrc={`/images/services/${service.iconName}`}
              description={service.description}
              key={service.iconName}
            />
          ))}
        </Slider>
        <SliderControl onClick={moveRightHandler} />
      </div>
      <SliderProgress
        curIndex={curIndex}
        length={services.length}
        styles="mx-auto w-fit mt-8 lg:mt-[52px]"
        isLaptop={isLaptop}
        isTwo
      />
    </section>
  );
};

export default ServicesSection;
