import MaterialsControls from "./MaterialsControls";
import Material from "./Material";
import Slider from "../ui/Slider";
import useSlider from "@/hooks/use-slider";
import materials from "@/data/materials";

const MaterialsSection = () => {
  const { curIndex, moveRightHandler, isLaptop } = useSlider(
    materials.length,
    true
  );

  return (
    <section className="section-dark">
      <h2 className="heading mb-2.5 lg:mb-8">
        Наши кухни сохраняют первозданные вид и функциональность от 10
        лет и более
      </h2>
      <p className="mr-2.5 mb-8 leading-[1.5] lg:mb-[60px] max-w-[900px] lg:!mx-auto">
        Благодаря сертифицированным и качественным материалам, которые
        мы тщательно подбираем под каждую кухню
      </p>
      <Slider
        curIndex={curIndex}
        itemWidth={isLaptop ? 975 : 305}
        spacing={16}
        styles="space-x-4 lg:duration-[450ms]"
        shadowSize={4}
        isLaptop={isLaptop}
        isOnly
        containerStyles="lg:w-auto"
      >
        {materials.map((material) => (
          <Material
            title={material.title}
            description={material.description}
            imgSrc={`/images/materials/${material.imgName}`}
            properties={material.properties}
            key={material.imgName}
          />
        ))}
      </Slider>
      <MaterialsControls
        curIndex={curIndex}
        moveHandler={moveRightHandler}
        length={materials.length}
        isLaptop={isLaptop}
      />
    </section>
  );
};

export default MaterialsSection;
