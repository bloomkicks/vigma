function formatTime(secs: number): string {
  let newSecs = Math.floor(secs % 60);
  let mins = Math.floor(secs / 60);
  let hours = Math.floor(mins / 60);
  mins -= hours * 60;

  return `${hours <= 9 ? "0" + hours : hours}:${
    mins <= 9 ? "0" + mins : mins
  }:${newSecs <= 9 ? "0" + newSecs : newSecs}`;
}

export default formatTime;
