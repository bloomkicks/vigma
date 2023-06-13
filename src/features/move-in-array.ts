function moveInArray(
  cur: number,
  length: number,
  isMany: boolean,
  minus?: boolean,
  limited?: boolean,
  isTwo?: boolean
): number {
  let result: number | null = null;
  let edge = isMany ? (isTwo ? 2 : 3) : 1;

  if (minus) {
    if (cur === 0) {
      result = limited ? 0 : length - edge;
    } else result = cur - 1;
  } else {
    if (cur >= length - edge) {
      result = limited ? cur : 0;
    } else result = cur + 1;
  }
  return result;
}

export default moveInArray;
