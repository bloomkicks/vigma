"use client";

import { useState, useEffect } from "react";
import formatTime from "@/utils/format-time";

const Timer = ({ styles }: { styles?: string }) => {
  const stopDate = new Date();
  stopDate.setHours(24);

  const [leftSecs, setLeftSecs] = useState(() =>
    Math.floor((stopDate.getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    setInterval(() => {
      setLeftSecs((prev) => prev - 1);
    }, 1000);
  }, []);

  return (
    <div
      className={
        "text-button-lg rounded-1 bg-[#B0B0B0] bg-opacity-50 px-3 py-1 w-fit numbers mb-px " +
        (styles || "")
      }
    >
      <p>{formatTime(leftSecs)}</p>
    </div>
  );
};

export default Timer;
