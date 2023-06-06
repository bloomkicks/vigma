import Link from "next/link";
const links: {
  title: string;
  link: string;
}[] = [
  {
    title: "Наши кухни",
    link: "#products",
  },
  {
    title: "Рассчитать стоимость",
    link: "#quiz",
  },
  {
    title: "Получить кухню",
    link: "#get-kitchen",
  },
  {
    title: "О фабрике",
    link: "#factory",
  },
  {
    title: "Отзывы",
    link: "#reviews",
  },
  {
    title: "Контакты",
    link: "#contacts",
  },
];

const NavLinks = ({styles}: {styles?: string}) => {
  return (
    <div className={"flex flex-col space-y-[25px] items-start justify-start " + (styles || '')}>
      {links.map((link) => (
        <Link href={link.link} passHref legacyBehavior>
          <a>
            <h6 className="font-strong font-semibold text-[1.56rem]">
              {link.title}
            </h6>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
