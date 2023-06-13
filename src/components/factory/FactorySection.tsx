const imgNames = [
  "working.jpg",
  "machine.jpg",
  "machine2.jpg",
  "storage.jpg",
  // "entrance.jpg",
  "corner.jpg",
  "table.jpg",
];

const FactorySection = () => {
  return (
    <section className="section-light" id="factory">
      <h2 className="heading mb-2.5 lg:mb-8">
        Наша фабрика работает на лучшем европейском оборудовании
      </h2>
      <p className="mb-5 leading-[1.5] lg:mb-[52px] max-w-[900px] mx-auto">
        Мы используем передовое и высококачественное оборудование при
        производстве и дизайне кухонь, что гарантирует наивысшее
        качество и точность вашего заказа. А большая площадь
        производства позволяет сократить сроки изготавления вашей
        кухни (от 15 дней)
      </p>
      <div className="flex flex-row overscroll overflow-x-scroll pb-2 space-x-4 snap-x snap-proximity pr-[35px] mr-[-35px] h-[185px] lg:h-[320px]">
        {imgNames.map((imgName) => (
          <img
            key="imgName"
            src={"/images/factory/" + imgName}
            alt="Изображение не найдено"
            className="shrink-0 h-full w-auto object-cover object-center rounded-[3px]"
          />
        ))}
      </div>
    </section>
  );
};

export default FactorySection;
