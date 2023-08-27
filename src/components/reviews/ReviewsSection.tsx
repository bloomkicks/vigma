import { useState } from "react";
import SourceChoice from "./SourceChoice";
import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import useSlider from "@/hooks/use-slider";
import reviews from "@/data/reviews";

const ReviewsSection = () => {
  const [isProfiActive, setIsProfiActive] = useState(false);

  const {
    curIndex,
    moveLeftHandler,
    moveRightHandler,
    isLaptop,
    setCurIndex,
  } = useSlider(
    reviews.filter((review) =>
      isProfiActive ? review.isProfi : !review.isProfi
    ).length,
    false,
    false,
    true
  );

  function profiChooseHandler() {
    setIsProfiActive(true);
    setCurIndex(0);
  }
  function messagesChooseHandler() {
    setIsProfiActive(false);
    setCurIndex(0);
  }

  return (
    <section id="reviews" className="section-light">
      <h2 className="heading mb-[26px] lg:mb-[32px]">
        Послушайте тех, кто уже получил у нас новую кухню
      </h2>
      <SourceChoice
        onProfiClick={profiChooseHandler}
        onMessagesClick={messagesChooseHandler}
        isProfiActive={isProfiActive}
      />
      <div className="flex flex-row justify-center items-center mt-[22px] -ml-1 lg:mt-[46px]">
        <SliderControl isLeft onClick={moveLeftHandler} />
        <Slider
          curIndex={curIndex}
          itemWidth={260}
          shadowSize={4}
          spacing={16}
          styles="space-x-4"
          isLaptop={isLaptop}
        >
          {reviews
            .filter((review) =>
              isProfiActive ? review.isProfi : !review.isProfi
            )
            .map((review) => (
              <img
                src={`/images/reviews/${review.imgName}`}
                key={review.imgName}
                alt="Изображение не найдено"
                className="w-[260px] h-auto shadow-strong rounded-1 object-cover object-center"
                width="260px"
                height="445.5px"
                loading="lazy"
              />
            ))}
        </Slider>
        <SliderControl onClick={moveRightHandler} />
      </div>
    </section>
  );
};

export default ReviewsSection;
