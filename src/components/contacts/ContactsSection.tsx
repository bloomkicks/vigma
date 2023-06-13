import YandexMap from "./YandexMap";
import ContactList from "./ContactList";

const ContactsSection = () => {
  return (
    <section className="section-light !pt-0 lg:!px-0" id="contacts">
      <div className="relative flex flex-row justify-start items-end w-[calc(100%+70px)] ml-[-35px] lg:ml-0 lg:px-[160px] lg:w-full">
        <h2 className="heading mt-[50px] mb-[45px] mx-[35px] w-[55%] z-20 lg:w-full lg:mt-[70px] lg:mb-[48px]">
          Свяжитесь с нами и мы вам поможем
        </h2>
        <img
          src="/images/contacts/manager.png"
          alt=""
          className="absolute w-[40%] h-auto z-10 right-3 max-w-[220px] lg:hidden"
        />
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden lg:hidden">
          <img
            src="/images/general/bg-circle.svg"
            alt=""
            className="absolute bottom-0 right-[10px] translate-y-1/2 translate-x-1/2 rounded-[800px] h-[375px] w-[375px] lg:translate-x-0 lg:right-[-80px] lg:w-[600px]"
          />
        </div>
      </div>
      <div className="bg-[#D6D6D6] w-full h-0.5 mb-[25px] lg:mb-[46px] lg:hidden"></div>
      <div className="w-full h-full lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:px-[120px] lg:overflow-x-hidden lg:overflow-y-visible lg:py-1">
        <ContactList />
        <YandexMap />
      </div>
    </section>
  );
};

export default ContactsSection;
