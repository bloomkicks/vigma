import { useState } from "react";

function getSliderIndex(
  cur: number,
  length: number,
  minus?: boolean
): number {
  let result: number | null = null;
  if (minus) {
    if (cur === 0) result = length - 1;
    else result = cur - 1;
  } else {
    result = (cur + 1) % length;
  }
  return result;
}

const useSlider = (length: number) => {
  const [curIndex, setCurIndex] = useState(0);
  function moveRightHandler() {
    setCurIndex((prev) => getSliderIndex(prev, length));
  }
  function moveLeftHandler() {
    setCurIndex((prev) => getSliderIndex(prev, length, true));
  }

  return {
    moveRightHandler,
    moveLeftHandler,
    curIndex,
  };
};
export default useSlider;
