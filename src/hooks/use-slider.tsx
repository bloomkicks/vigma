import moveInArray from "@/features/move-in-array";
import { useEffect, useState } from "react";

const useSlider = (
  length: number,
  isOnly?: boolean,
  isTwo?: boolean
) => {
  const [curIndex, setCurIndex] = useState(0);
  const [isLaptop, setIsLaptop] = useState(false);

  function moveRightHandler() {
    setCurIndex((prev) =>
      moveInArray(prev, length, isLaptop && !isOnly, false, false, isTwo)
    );
  }
  function moveLeftHandler() {
    setCurIndex((prev) =>
      moveInArray(prev, length, isLaptop && !isOnly, true, false, isTwo)
    );
  }

  useEffect(() => {
    setIsLaptop(window.innerWidth > 1024);
    window.addEventListener("resize", () => {
      setIsLaptop(window.innerWidth > 1024);
    });
  }, []);

  return {
    moveRightHandler,
    moveLeftHandler,
    curIndex,
    isLaptop,
    setCurIndex
  };
};
export default useSlider;
