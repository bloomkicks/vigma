import StepList from "./StepList";

const GetKitchenSection = () => {
  return (
    <section className="section-dark pl-[35px] pr-[45px]" id="get-kitchen">
      <h2 className="heading mb-[26px]">
        Получить новую кухню - легко!
      </h2>
      <StepList />
      <button className="button block mx-auto mt-[33px] mb-4 bg-primary text-black shadow-dark">
        Вызвать дизайнера
      </button>
      <p className="text-center">
        Выезд, замер и проект –{" "}
        <span className="inline-block py-0.5 px-[5.5px] bg-[#303030] -skew-x-6 font-semibold">
          бесплатно
        </span>
      </p>
    </section>
  );
};

export default GetKitchenSection;
