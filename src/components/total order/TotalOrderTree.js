const doubleArrowSvg = "/order-assets/double-arrow.svg";
import Section from "../ui/Section";
import Third from "../ui/Third";
import classes from "./TotalOrderTree.module.css";

const translations = {
  // room: {
    office: "Офис",
    kitchen: "Кухня",
    bedroom: "Спальная",
  // },
  // type: {
    desk: "Столы",
    chair: "Стулья",
    cabinet: "Тумбы",
    straight: "Прямая",
    angled: "Угловая",
    "u-shaped": "П-образная",
    bed: "Кровать",
    closet: "Шкаф",
    sofa: "Диван",
    bathroom: "Ванная",
    entryway: "Прихожая",
    "tc-island": "Торговый островок",
  // },
  // material: {
    glass: "Стекло",
    plastic: "Пластик",
    enamel: "Эмаль",
  // },
};

const TotalOrderTree = (props) => {
  const { queries, ...treeProps } = props;
  const treeItems = []
  for (let query of queries) {
    console.log(query)
    treeItems.push(translations[query])
  }

  return (
    <Section className={classes.TotalOrderTree}>
      {treeItems
        .filter((item) => item)
        .map((query, i, a) => {
          const isLast = i >= a.length - 1;
          return (
            <>
              <div className={classes.Query}>
                <Third>{query}</Third>
              </div>
              {!isLast && <img src={doubleArrowSvg} />}
            </>
          );
        })}
    </Section>
  );
};

export default TotalOrderTree;
