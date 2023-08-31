import { useEffect, useState } from "react";

function useMediaQuery(min: number, max: number) {
  const [isWithinRange, setIsWithinRange] = useState(false);

  useEffect(() => {
    setIsWithinRange(window.innerWidth >= min && window.innerWidth <= max);
    window.addEventListener("resize", () => {
      setIsWithinRange(window.innerWidth >= min && window.innerWidth <= max);
    });
  }, [min, max]);

  return isWithinRange;
}

export default useMediaQuery;
