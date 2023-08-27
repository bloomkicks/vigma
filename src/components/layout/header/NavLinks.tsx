import Link from "next/link";
const links: {
  title: string;
  link: string;
}[] = [
  {
    title: "Проекты кухонь",
    link: "/catalog",
  },
  {
    title: "Рассчитать стоимость",
    link: "/#quiz",
  },
  {
    title: "Получить кухню",
    link: "/#get-kitchen",
  },
  {
    title: "О фабрике",
    link: "/#our-factory",
  },
  {
    title: "Отзывы",
    link: "/#reviews",
  },
  {
    title: "Контакты",
    link: "/#contact-us",
  },
];

const NavLinks = ({
  styles,
  linkStyles,
}: {
  styles?: string;
  linkStyles?: string;
}) => {
  return (
    <div
      className={
        "flex flex-col space-y-[22px] items-start justify-start text-[1.563rem] " +
        (styles || "")
      }
    >
      {links.map((link) => (
        <Link
          href={link.link}
          passHref
          legacyBehavior
          key={link.link}
        >
          <a className={"fade-out-hover " + (linkStyles || "")}>
            <h6 className="font-strong font-semibold">
              {link.title}
            </h6>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
