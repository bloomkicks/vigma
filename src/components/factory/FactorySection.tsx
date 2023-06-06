const FactorySection = () => {
  return (
    <section className="section-light pl-[35px] pr-[45px]" id="factory">
      <h2 className="heading mb-2.5">
        Наша фабрика работает на лучшем европейском оборудовании
      </h2>
      <p className="mb-5">
        Мы используем передовое и высококачественное оборудование при
        производстве и дизайне кухонь, что гарантирует наивысшее
        качество и точность вашего заказа
      </p>
      <img
        src="/images/factory/factory.jpg"
        alt="Изображение не найдено"
        className="w-full h-auto max-h-[185px] object-cover object-center rounded-[3px]"
      />
    </section>
  );
};

export default FactorySection;
