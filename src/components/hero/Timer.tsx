"use client";
import { useState, useEffect } from "react";

function formatTime(secs: number): string {
  let newSecs = secs % 60;
  let mins = Math.floor(secs / 60);
  let hours = Math.floor(mins / 60);
  mins -= hours * 60;

  return `${hours <= 9 ? "0" + hours : hours}:${
    mins <= 9 ? "0" + mins : mins
  }:${newSecs <= 9 ? "0" + newSecs : newSecs}`;
}

const Timer = ({ styles }: { styles?: string }) => {
  const stopDate = new Date();
  stopDate.setHours(24);

  const [leftSecs, setLeftSecs] = useState(
    (stopDate.getTime() - Date.now()) / 1000
  );

  useEffect(() => {
    {
      setTimeout(() => {
        setLeftSecs((prev) => prev - 1);
      }, 1000);
    }
  }, [leftSecs]);

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
