import Link from "next/link";

const socials: {
  link: string;
  title: string;
  iconName: string;
  height: number;
}[] = [
  {
    link: "https://wa.me/79643426051",
    title: "WhatsApp",
    height: 34,
    iconName: "whatsapp.svg",
  },
  {
    link: "https://t.me/vigmamebel",
    title: "Телеграм",
    height: 30,
    iconName: "telegram.svg",
  },
  {
    link: "https://vk.com/vigmaspb",
    title: "ВКонтакте",
    height: 25,
    iconName: "vk.svg",
  },
  {
    link: "mailto:vigmaspb@gmail.com",
    title: "Эл. Почта",
    height: 28,
    iconName: "gmail.svg",
  },
];

const Socials = () => {
  return (
    <div className="bg-dark flex flex-row justify-start items-center px-10 space-x-[30px] py-2.5 w-[calc(100%+70px)] ml-[-35px] relative z-10 lg:py-4 lg:space-x-[38px] lg:px-4 lg:ml-[-38px] lg:!my-[18px]">
      <div className="hidden bg-dark absolute left-[-1000px] top-0 h-full w-[2000px] -z-10 lg:block"></div>
      {socials.map((social, i) => (
        <Link
          href={social.link}
          key={social.iconName}
          passHref
          legacyBehavior
        >
          <a className={"block " + (i === 0 ? "!ml-0 lg:!ml-[26px]" : "")}>
            <img
              src={`/images/contacts/${social.iconName}`}
              alt={social.title}
              title={social.title}
              style={{ height: social.height + "px" }}
              className={"w-auto lg:scale-110"}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
