import { useState } from "react";
import SourceChoice from "./SourceChoice";
import Slider from "../ui/Slider";
import SliderControl from "../ui/SliderControl";
import useSlider from "@/hooks/use-slider";

const reviews: { imgName: string; isProfi?: boolean }[] = [
  {
    imgName: "irina-repisheva.jpg",
  },
  {
    imgName: "irina-repisheva.jpg",
    isProfi: true,
  },
  {
    imgName: "irina-repisheva.jpg",
  },
];

const ReviewsSection = () => {
  const [isProfiActive, setIsProfiActive] = useState(false);

  const { curIndex, moveLeftHandler, moveRightHandler } = useSlider(
    reviews.length
  );

  function profiChooseHandler() {
    setIsProfiActive(true);
  }
  function messagesChooseHandler() {
    setIsProfiActive(false);
  }

  return (
    <section className="section-light" id="reviews">
      <h2 className="heading mb-8 ml-[40px] pr-[50px]">
        Послушайте тех, кто уже наслаждается нашей кухней
      </h2>
      <SourceChoice
        onProfiClick={profiChooseHandler}
        onMessagesClick={messagesChooseHandler}
        isProfiActive={isProfiActive}
      />
      <div className="flex flex-row justify-center items-center mt-6">
        <SliderControl isLeft onClick={moveLeftHandler} />
        <Slider
          curIndex={curIndex}
          itemWidth={240}
          shadowSize={4}
          spacing={16}
          styles="space-x-4 pb-2.5 pt-0.5"
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
                className="w-[240px] h-auto shadow-strong rounded-2 translate-x-1"
              />
            ))}
        </Slider>
        <SliderControl onClick={moveRightHandler} />
      </div>
    </section>
  );
};

export default ReviewsSection;
