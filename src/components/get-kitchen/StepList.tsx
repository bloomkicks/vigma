const steps = [
  {
    iconName: "phone.svg",
    text: "Вызвать дизайнера для проведения замеров",
  },
  {
    iconName: "plan.svg",
    text: "Согласовать проект вашей кухни с дизайнером",
  },
  {
    iconName: "papers.svg",
    text: "Внести аванс удобным вам способом",
  },
  {
    iconName: "stars.svg",
    text: "Получить новую кухню в течение месяца",
  },
];

const StepList = () => {
  return (
    <div className="space-y-5 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-start lg:space-y-0 lg:mr-[-52px] lg:mb-[-44px]">
      {steps.map((step, i) => (
        <div
          className="text-left flex flex-row justify-start items-center space-x-3.5 lg:w-[40%] lg:space-x-[18px] lg:!mb-[44px] lg:!mr-[48px]"
          key={step.iconName}
        >
          <img
            src={`/images/get-kitchen/${step.iconName}`}
            alt=""
            height="80px"
            width="80px"
            className="w-[56px] h-[56px] aspect-square shadow-dark lg:w-[80px] lg:h-[80px]"
          />
          <p className="leading-[1.5]">
            <span className="numbers">{i + 1}. </span>
            {step.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StepList;
