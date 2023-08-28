import MobileHeaderContent from "./MobileHeaderContent";
import Link from "next/link";

const links: {
  title: string;
  link: string;
}[] = [
  {
    title: "Наши кухни",
    link: "/catalog",
  },
  {
    title: "Рассчитать стоимость",
    link: "/#quiz",
  },
  {
    title: "Контакты",
    link: "/#contact-us",
  },
  {
    title: "Отзывы",
    link: "/#reviews",
  },
  {
    title: "О фабрике",
    link: "/#our-factory",
  },
];

const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full h-16 bg-dark shadow-[1px_3px_4px_rgba(0,0,0,0.35)]">
      <div className="mx-auto h-full max-w-[1366px] px-8 sm:px-12 md:px-24 flex flex-row items-center justify-center relative lg:block">
        <div className="hidden lg:flex flex-row items-center h-full absolute right-[60%] top-0 space-x-[36px]">
          {links.slice(0, 2).map((link) => (
            <Link
              href={link.link}
              passHref
              legacyBehavior
              key={link.link}
            >
              <a className="fade-out-hover text-white">
                <h6 className="font-strong font-semibold">
                  {link.title}
                </h6>
              </a>
            </Link>
          ))}
        </div>
        <Link href="/" passHref legacyBehavior>
          <a className="transition-colors duration-150 lg:duration-200 p-2 hover:bg-dark-lightened hover:opacity-100 rounded-1 lg:absolute left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <img
              src="/images/header/long-icon.svg"
              alt="ВИГМА"
              className="w-[138.6px] h-[33.5px]"
            />
          </a>
        </Link>
        <div className="hidden lg:flex flex-row items-center h-full absolute left-[60%] top-0 space-x-[36px]">
          {links.slice(2, 5).map((link) => (
            <Link
              href={link.link}
              passHref
              legacyBehavior
              key={link.link}
            >
              <a className="fade-out-hover text-white">
                <h6 className="font-strong font-semibold">
                  {link.title}
                </h6>
              </a>
            </Link>
          ))}
        </div>
        <MobileHeaderContent />
      </div>
    </header>
  );
};

export default Header;
