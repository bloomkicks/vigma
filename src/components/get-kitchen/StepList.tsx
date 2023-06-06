const steps = [
  {
    iconName: "phone.svg",
    text: "1. Вызвать дизайнера для проведения замеров",
  },
  {
    iconName: "plan.svg",
    text: "2. Согласовать проект вашей кухни с дизайнером",
  },
  {
    iconName: "papers.svg",
    text: "3. Внести аванс удобным вам способом",
  },
  {
    iconName: "stars.svg",
    text: "4. Получить новую кухню в течение месяца",
  },
];

const StepList = () => {
  return (
    <div className="space-y-5">
      {steps.map((step) => (
        <div
          className="flex flex-row justify-start items-center space-x-3.5"
          key={step.iconName}
        >
          <img
            src={`/images/get-kitchen/${step.iconName}`}
            alt=""
            className="w-[50px] h-[50px] aspect-square shadow-dark"
          />
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
};

export default StepList;
