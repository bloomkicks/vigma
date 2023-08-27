import MaterialsControls from "./MaterialsControls";
import Material from "./Material";
import Slider from "../ui/Slider";
import useSlider from "@/hooks/use-slider";
import materials from "@/data/materials";

const OurMaterialsSection = () => {
  const {
    curIndex,
    moveRightHandler,
    isLaptop,
    isMedium,
    isExSmall,
  } = useSlider(materials.length, true);

  let materialWidth = isLaptop
    ? 975
    : isMedium
    ? 440
    : isExSmall
    ? 295
    : 305;

  return (
    <section id="our-materials" className="section-dark !px-0 md:!px-[120px] lg:!px-[202px]">
      <h2 className="heading mb-2.5 lg:mb-8 mx-[35px] lg:mx-0 xs:mx-8">
        Наши кухни сохраняют первозданные вид и функциональность от 10
        лет и более
      </h2>
      <p className="ml-[35px] xs:ml-8 mr-[42px] mb-8 leading-[1.5] lg:mb-[60px] max-w-[900px] lg:!mx-auto">
        Благодаря сертифицированным и качественным материалам, которые
        мы тщательно подбираем под каждую кухню
      </p>
      <div className="flex flex-col items-center justify-start min-w-[290px]">
        <Slider
          curIndex={curIndex}
          itemWidth={materialWidth}
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
      </div>
    </section>
  );
};

export default OurMaterialsSection;
