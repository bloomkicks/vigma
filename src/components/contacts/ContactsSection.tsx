import ContactList from "./ContactList";

const ContactsSection = () => {
  return (
    <section className="section-light !pt-0" id="contacts">
      <div className="relative flex flex-row justify-start items-end overflow-hidden">
        <h2 className="heading mt-[50px] mb-[45px] ml-[40px] w-[50%] z-20">
          Свяжитесь с нами и мы вам поможем
        </h2>
        <img
          src="/images/contacts/manager.png"
          alt=""
          className="absolute w-[40%] h-auto z-10 right-3"
        />
        <div className="absolute bottom-[-50px] right-[10px] translate-y-1/2 translate-x-1/2 rounded-[500px] h-[375px] w-[375px] skew-x-[10deg] bg-[#F4E9CB]"></div>
      </div>
      <div className="bg-[#D6D6D6] w-full h-0.5 mb-[25px]"></div>
      <ContactList />
    </section>
  );
};

export default ContactsSection;
