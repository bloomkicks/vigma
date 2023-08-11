import moveInArray from "@/features/move-in-array";
import { useEffect, useState } from "react";

const useSlider = (
  length: number,
  isOnly?: boolean,
  isTwo?: boolean,
  isMdLaptop?: boolean
) => {
  const [curIndex, setCurIndex] = useState(0);
  const [isMedium, setIsMedium] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isExSmall, setIsExSmall] = useState(false);

  function moveRightHandler() {
    setCurIndex((prev) =>
      moveInArray(
        prev,
        length,
        isLaptop && !isOnly,
        false,
        false,
        isTwo
      )
    );
  }
  function moveLeftHandler() {
    setCurIndex((prev) =>
      moveInArray(
        prev,
        length,
        isLaptop && !isOnly,
        true,
        false,
        isTwo
      )
    );
  }

  useEffect(() => {
    let isMd = window.innerWidth > 1024 - 1;
    setIsMedium(isMd);
    setIsLaptop(isMd && window.innerWidth > 1280 - 1);
    setIsExSmall(window.innerWidth < 372);
    window.addEventListener("resize", () => {
      let isMd = window.innerWidth > 1024 - 1;
      setIsMedium(isMd);
      setIsLaptop(isMd && window.innerWidth > 1280 - 1);
      setIsExSmall(!isMd && window.innerWidth < 372);
    });
  }, []);

  return {
    moveRightHandler,
    moveLeftHandler,
    curIndex,
    isLaptop: isMdLaptop ? isMedium : isLaptop,
    setCurIndex,
    isExSmall,
    isMedium,
  };
};
export default useSlider;
