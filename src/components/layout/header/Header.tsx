import MobileHeaderContent from "./MobileHeaderContent";
import Link from "next/link";

const links: {
  title: string;
  link: string;
}[] = [
  {
    title: "Наши кухни",
    link: "/kitchens",
  },
  {
    title: "Рассчитать стоимость",
    link: "/#quiz",
  },
  {
    title: "Контакты",
    link: "/#contacts",
  },
  {
    title: "Отзывы",
    link: "/#reviews",
  },
  {
    title: "О фабрике",
    link: "/#factory",
  },
];

const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full h-16 bg-dark shadow-[1px_3px_4px_rgba(0,0,0,0.35)]">
      <div className="mx-auto h-full max-w-[1366px] flex flex-row items-center justify-between px-8 lg:justify-center lg:space-x-[36px]">
        {links.slice(0, 2).map((link) => (
          <Link
            href={link.link}
            passHref
            legacyBehavior
            key={link.link}
          >
            <a className="fade-out-hover text-white hidden lg:block">
              <h6 className="font-strong font-semibold">
                {link.title}
              </h6>
            </a>
          </Link>
        ))}
        <Link href="/" passHref legacyBehavior>
          <a className="transition-colors duration-150 lg:duration-200 p-2 pt-1.5 -translate-y-px hover:bg-dark-lightened hover:opacity-100 rounded-1 lg:!mx-[88px] lg:!mr-[52px]">
            <img
              src="/images/header/logo.svg"
              alt="На главную"
              className="w-[110px] h-[35px] "
            />
          </a>
        </Link>
        {links.slice(2, 5).map((link) => (
          <Link
            href={link.link}
            passHref
            legacyBehavior
            key={link.link}
          >
            <a className="fade-out-hover text-white hidden lg:block">
              <h6 className="font-strong font-semibold">
                {link.title}
              </h6>
            </a>
          </Link>
        ))}
        <MobileHeaderContent />
      </div>
    </header>
  );
};

export default Header;
