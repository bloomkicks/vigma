// ANGLED KITCHEN
const kitchenHorizontalSrc = "/works-assets/kitchen/horizontal.jpg";
const kitchenInsidesSrc = "/works-assets/kitchen/with insides.jpg";

// BED AND DESK
const bedSrc = "/works-assets/bed, desk, shelf/bed.jpeg"
const deskSrc = "/works-assets/bed, desk, shelf/desk.jpeg"

import Work from "./Work";
import classes from "./WorksContent.module.css";

const works = [
  {
    photos: [
      {
        src: kitchenHorizontalSrc,
      },
      {
        src: kitchenInsidesSrc,
        isVertical: true,
      },
    ],
    name: "Угловая Кухня Инь-Янь",
    description: "Фактура: МДФ и Эмаль",
    colors: ["#EEE9E5", "repeating-linear-gradient(90deg, #2e2926, #1F1D1E 3px)"],
    query: {
      room: 'kitchen',
      type: 'angled',
      material: 'enamel'
    }
  },
  {
    photos: [
      {
        src: bedSrc,
        isVertical: true,
      },
      {
        src: deskSrc,
        isVertical: true,
      }
    ],
    name: "Спальная Комната Уют",
    description: "Фактура: ЛДСП",
    colors: ["#c4c2b6", "repeating-linear-gradient(-45deg, #aca89c, #786859 3px)"],
    query: {
      room: 'bedroom',
      type: 'bed',
      material: 'enamel'
    }
  }
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
