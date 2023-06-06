import { MutableRefObject, useRef } from "react";

function getInt(ref: MutableRefObject<HTMLSpanElement | null>) {
  return parseInt(ref.current!.innerHTML);
}

function setTime(
  ref: MutableRefObject<HTMLSpanElement | null>,
  time: number
) {
  let value = time.toString();
  return (ref.current!.innerHTML =
    value.length === 2 ? value : "0" + value);
}

const Timer = ({ styles }: { styles?: string }) => {
  const date = new Date();
  const hours = useRef<HTMLSpanElement>(null);
  const mins = useRef<HTMLSpanElement>(null);
  const secs = useRef<HTMLSpanElement>(null);

  let defHours = (25 - date.getHours()).toString();
  let defMins = (60 - date.getMinutes()).toString();
  let defSecs = (60 - date.getSeconds()).toString();

  defHours = defHours.length === 2 ? defHours : "0" + defHours;
  defMins = defMins.length === 2 ? defMins : "0" + defMins;
  defSecs = defSecs.length === 2 ? defSecs : "0" + defSecs;

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(secs, getInt(secs) === 0 ? 60 : getInt(secs) - 1);
  //     if (getInt(secs) === 60) {
  //       setTime(mins, getInt(mins) === 0 ? 60 : getInt(mins) - 1);
  //       if (getInt(mins) === 60) {
  //         setTime(
  //           hours,
  //           getInt(hours) === 0 ? 60 : getInt(hours) - 1
  //         );
  //       }
  //     }
  //   }, 1100);
  // }, []);

  return (
    <div
      className={
        "text-[20px] rounded-0.5 bg-[#B0B0B0] bg-opacity-50 px-[9px] py-1 w-fit " +
        (styles || "")
      }
    >
      <span ref={hours}>{defHours}</span>:
      <span ref={mins}>{defMins}</span>:
      <span ref={secs}>{defSecs}</span>
    </div>
  );
};

export default Timer;
