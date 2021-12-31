// ANGLED KITCHEN
import angledHorizontal from "../../assets/works/angled kitchen/horizontal.jpg";
import angledVertical from "../../assets/works/angled kitchen/vertical.jpg";

// STRAIGHT KITCHEN
import straightFridge from "../../assets/works/straight kitchen/fridge/outer.jpg";
import straightBottom from "../../assets/works/straight kitchen/tables/outer.jpg";
import straightTop from "../../assets/works/straight kitchen/top/outer.jpg";

import Work from "./Work";
import classes from "./WorksContent.module.css";

const works = [
  {
    photos: [
      {
        src: angledVertical,
        isVertical: true,
      },
      {
        src: angledHorizontal,
      },
    ],
    name: "Прямая кухня",
    description: "Материалы: МДФ и массив Фактура: МДФ",
    colors: ["#EEE9E5", "#1F1D1E"],
  },
  // {
  //   name: "Прямая кухня",
  //   photos: [
  //     {
  //       src: straightFridge,
  //       isVertical: true,
  //     },
  //     {
  //       src: straightTop,
  //     },
  //     {
  //       src: straightBottom,
  //     },
  //   ],
  // },
];

const WorksContent = (props) => {
  return (
    <main className={classes.WorksContent}>
      {works.map((work) => {
        return <Work {...work} key={Math.random()} />;
      })}
    </main>
  );
};

export default WorksContent;
