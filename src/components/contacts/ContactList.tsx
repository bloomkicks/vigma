import Socials from "./Socials";
import Link from "next/link";

const contacts: {
  title: string;
  value: string;
  link?: string;
  isVertical?: boolean;
}[] = [
  {
    title: "Телефон",
    value: "+7 (964) 642-60-51",
    link: "tel:+7(964)642-60-51",
  },
  {
    title: "Главный менеджер",
    value: "Филатова Г. М.",
  },
  {
    title: "Часы работы",
    value: "9:00 - 20:00 (пн-пт)",
  },
  {
    title: "Наше производство",
    value: "Санкт-Петербург, ул. Автобусная, д. 3",
    isVertical: true,
  },
];
const ContactList = () => {
  return (
    <div className="space-y-3.5">
      {contacts.map((contact, i) => (
        <>
          {i === 2 && <Socials />}
          <p key={contact.title} className="px-[35px] pr-[45px]">
            <span className="font-medium">{contact.title}: </span>
            {contact.link ? (
              <Link href={contact.link} passHref legacyBehavior>
                <a
                  className={contact.isVertical ? "block mt-1.5" : ""}
                >
                  {contact.value}
                </a>
              </Link>
            ) : (
              <span
                className={contact.isVertical ? "block mt-1.5" : ""}
              >
                {contact.value}
              </span>
            )}
          </p>
        </>
      ))}
    </div>
  );
};

export default ContactList;
