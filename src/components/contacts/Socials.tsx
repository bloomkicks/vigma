import Link from "next/link";

const socials: {
  link: string;
  title: string;
  iconName: string;
  height: string;
}[] = [
  {
    link: "https://wa.me/79643426051",
    title: "WhatsApp",
    height: "34px",
    iconName: "whatsapp.svg",
  },
  {
    link: "https://t.me/vigmamebel",
    title: "Телеграм",
    height: "30px",
    iconName: "telegram.svg",
  },
  {
    link: "https://vk.com/vigmaspb",
    title: "ВКонтакте",
    height: "25px",
    iconName: "vk.svg",
  },
  {
    link: "mailto:vigmaspb@gmail.com",
    title: "Эл. Почта",
    height: "28px",
    iconName: "gmail.svg",
  },
];

const Socials = () => {
  return (
    <div className="bg-black-light flex flex-row justify-start items-center px-10 space-x-[30px] py-2.5">
      {socials.map((social) => (
        <Link
          href={social.link}
          key={social.iconName}
          passHref
          legacyBehavior
        >
          <a className="block">
            <img
              src={`/images/contacts/${social.iconName}`}
              alt={social.title}
              title={social.title}
              style={{ height: social.height }}
              className="w-auto"
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
