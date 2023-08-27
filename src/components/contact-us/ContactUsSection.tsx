import YandexMap from "./YandexMap";
import ContactEntryList from "./ContactEntryList";

const ContactUsSection = () => {
  return (
    <section id="contact-us" className="section-light !pt-0 md:!px-0">
      <div className="relative flex flex-row justify-start items-end w-[calc(100%+70px)] ml-[-35px] md:ml-0 md:px-[160px] md:w-full">
        <h2 className="heading mt-[50px] mb-[45px] mx-[35px] w-[55%] z-20 md:w-full md:mt-[48px] md:mb-[36px] lg:mt-[70px] lg:mb-[48px]">
          Свяжитесь с нами и мы вам поможем
        </h2>
        <img
          src="/images/contacts/manager.png"
          alt=""
          className="absolute w-[40%] h-auto z-10 right-3 max-w-[220px] md:hidden"
        />
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden md:hidden">
          <img
            src="/images/general/bg-circle.svg"
            alt=""
            className="absolute bottom-0 right-[10px] translate-y-1/2 translate-x-1/2 rounded-[800px] h-[375px] w-[375px] md:translate-x-0 md:right-[-80px] md:w-[600px]"
          />
        </div>
      </div>
      <div className="bg-[#D6D6D6] w-full h-0.5 mb-[25px] md:mb-[46px] md:hidden"></div>
      <div className="w-full h-full md:flex md:flex-row-reverse md:justify-center md:items-center md:px-[120px] md:overflow-x-hidden md:overflow-y-visible md:py-1">
        <ContactEntryList />
        <YandexMap />
      </div>
    </section>
  );
};

export default ContactUsSection;
