import moveInArray from "@/features/move-in-array";
import { useEffect, useState } from "react";

const useSlider = (
  length: number,
  isOnly?: boolean,
  isTwo?: boolean
) => {
  const [curIndex, setCurIndex] = useState(0);
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
    setIsLaptop(window.innerWidth > 1024);
    setIsExSmall(window.innerWidth < 372);
    window.addEventListener("resize", () => {
      setIsLaptop(window.innerWidth > 1024);
      setIsExSmall(window.innerWidth < 372);
    });
  }, []);

  return {
    moveRightHandler,
    moveLeftHandler,
    curIndex,
    isLaptop,
    setCurIndex,
    isExSmall,
  };
};
export default useSlider;
