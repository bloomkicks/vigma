import Member from "./Member";
import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import useSlider from "@/hooks/use-slider";

const members: {
  name: string;
  specialty: string;
  imgName: string;
}[] = [
  {
    name: "Игорь Страусовский",
    specialty: "Рабочий на производстве",
    imgName: "igor-strausovsky.jpg",
  },
  {
    name: "Петр Страусовский",
    specialty: "Рабочий на производстве",
    imgName: "igor-strausovsky.jpg",
  },
  {
    name: "Иван Страусовский",
    specialty: "Рабочий на производстве",
    imgName: "igor-strausovsky.jpg",
  },
];

const StaffSection = () => {
  const { curIndex, moveLeftHandler, moveRightHandler } = useSlider(
    members.length
  );

  return (
    <section className="section-dark">
      <h2 className="heading ml-[40px] pr-[50px] mb-[30px]">
        У нас работают специалисты с опытом от 10 лет в сфере мебели
      </h2>
      <div className="flex flex-row justify-center items-center">
        <SliderControl isDark isLeft onClick={moveLeftHandler} />
        <Slider
          curIndex={curIndex}
          itemWidth={220}
          shadowSize={4}
          spacing={16}
          styles="space-x-4 pb-2.5 pt-0.5"
        >
          {members.map((member) => (
            <Member
              name={member.name}
              specialty={member.specialty}
              imgSrc={`/images/staff/${member.imgName}`}
              key={member.imgName}
            />
          ))}
        </Slider>
        <SliderControl isDark onClick={moveRightHandler} />
      </div>
    </section>
  );
};

export default StaffSection;
