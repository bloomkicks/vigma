import React from "react";
import Socials from "./Socials";
import Link from "next/link";

const contactEntries: {
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
    value: "Филатова Галина",
  },
  {
    title: "Часы работы",
    value: "9:00 - 21:00 (пн-пт)",
  },
  {
    title: "Наше производство",
    value: "Санкт-Петербург, ул. Автобусная, д. 3",
    isVertical: true,
  },
];
const ContactEntryList = () => {
  return (
    <div className="space-y-3.5 text-left mb-[22px] md:space-y-[16px] md:mb-0 md:min-w-[375px]">
      {contactEntries.map((contact, i) => (
        <React.Fragment key={contact.title}>
          {i === 2 && <Socials />}
          <p className="">
            <span className="font-semibold">{contact.title}: </span>
            {contact.link ? (
              <Link href={contact.link} passHref legacyBehavior>
                <a
                  className={
                    contact.isVertical ? "block mt-1.5 " : "numbers"
                  }
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContactEntryList;
