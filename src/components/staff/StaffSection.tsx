import Member from "./Member";
import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import useSlider from "@/hooks/use-slider";
import members from "@/data/members";

const StaffSection = () => {
  const { curIndex, moveLeftHandler, moveRightHandler, isLaptop } =
    useSlider(members.length, false, false, true);

  return (
    <section className="section-dark">
      <h2 className="heading mb-[30px] lg:mb-[52px]">
        Наша команда специалистов с опытом от 10 лет:
      </h2>
      <div className="flex flex-row justify-center items-center -ml-1">
        <SliderControl isDark isLeft onClick={moveLeftHandler} />
        <Slider
          curIndex={curIndex}
          itemWidth={isLaptop ? 255 : 226}
          shadowSize={4}
          spacing={16}
          styles="space-x-4"
          isLaptop={isLaptop}
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
