import blackWhiteKitchen2 from "../../assets/works/white-black kitchen/PHOTO-2021-04-18-21-15-11_1.jpg";
import blackWhiteKitchen from "../../assets/works/white-black kitchen/PHOTO-2021-04-18-21-15-11.jpg";
import overallKitchen from "../../assets/works/white whole kitchen/top/PHOTO-2021-12-05-20-35-11_2.jpg";
import Work from "./Work";
import classes from "./WorksContent.module.css";

const works = [
  {
    name: "Кухня где-то",
    photos: [overallKitchen],
  },
  {
    name: "Чернобелая кухня на какой то улице",
    photos: [
      blackWhiteKitchen,
      blackWhiteKitchen2,
    ],
  },
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
