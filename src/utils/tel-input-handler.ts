import React from "react";

function telInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
  let number = e.currentTarget.value.replace(/[^\d]/g, "");

  if (!number) return (e.currentTarget.value = "");
  const numberSlices = [
    number[0],
    number.slice(1, 4),
    number.slice(4, 7),
    number.slice(7, 9),
    number.slice(9, 11),
  ];
  let formattedNumber = "";

  const signs = ["+", " (", ") ", "-", "-"];
  numberSlices.forEach((slice, i) => {
    if (slice) formattedNumber += signs[i] + slice;
  });

  e.currentTarget.value = formattedNumber;
}

export default telInputHandler;
