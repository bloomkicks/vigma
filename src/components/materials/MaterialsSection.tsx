import Material from "./Material";
import Slider from "../ui/Slider";
import useSlider from "@/hooks/use-slider";
import SliderControl from "../ui/SliderControl";

const materials: {
  title: string;
  description: string;
  imgName: string;
}[] = [
  {
    title: "AGT МДФ",
    description:
      "Материал, рассчитанный на использование в качественной корпусной мебели",
    imgName: "agt-mdf.jpg",
  },
  {
    title: "AGT МДФ №2",
    description:
      "Материал, рассчитанный на использование в качественной корпусной мебели",
    imgName: "agt-mdf.jpg",
  },
];

const MaterialsSection = () => {
  const { curIndex, moveLeftHandler, moveRightHandler } = useSlider(
    materials.length
  );

  return (
    <section className="section-dark">
      <h2 className="heading mb-2 ml-[35px] pr-[50px]">
        Наши кухни сохраняют первозданные вид и функциональность от 10
        лет и более
      </h2>
      <p className="pr-[50px] pl-[35px] mb-8">
        Благодаря сертифицированным и качественным материалам, которые
        мы тщательно подбираем под каждую кухню
      </p>
      <div className="flex flex-row justify-center items-center">
        <SliderControl isDark isLeft onClick={moveLeftHandler} />
        <Slider
          curIndex={curIndex}
          itemWidth={250}
          spacing={16}
          styles="space-x-4 pb-2.5 pt-0.5"
          shadowSize={4}
        >
          {materials.map((material) => (
            <Material
              title={material.title}
              description={material.description}
              imgSrc={`/images/materials/${material.imgName}`}
              key={material.imgName}
            />
          ))}
        </Slider>
        <SliderControl isDark onClick={moveRightHandler} />
      </div>
    </section>
  );
};

export default MaterialsSection;
