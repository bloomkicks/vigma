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

export default getSliderIndex;
