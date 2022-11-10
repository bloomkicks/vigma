import React from "react";

function phoneInputHandler(e: React.KeyboardEvent<HTMLInputElement>) {
  let cleanNumber = e.currentTarget.value.replace(/[^\d]/g, "");

  if (!cleanNumber) return (e.currentTarget.value = "");
  const numberGroups = [
    cleanNumber[0],
    cleanNumber.slice(1, 4),
    cleanNumber.slice(4, 7),
    cleanNumber.slice(7, 9),
    cleanNumber.slice(9, 11),
  ];
  let formattedNumber = "";

  const addNumbers = (prefix, group) => {
    if (group) {
      formattedNumber += prefix + group;
    }
  };
  const signs = ["+", " (", ") ", "-", "-"];
  numberGroups.forEach((group) => addNumbers(signs.shift(), group));

  e.currentTarget.value = formattedNumber;
}

export default phoneInputHandler;
