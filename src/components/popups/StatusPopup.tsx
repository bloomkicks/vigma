const StatusPopup = ({
  mode,
  onClose,
  open,
}: {
  mode: string;
  onClose: () => void;
  open: boolean;
}) => {
  function waitToClose() {
    setTimeout(() => onClose(), 1000);
  }
  return (
    <>
      <div
        onClick={waitToClose}
        className={
          "backdrop fixed top-0 left-0 bg-black h-full w-full z-20 transition-opacity duration-[50ms] lg:duration-100 ease-out hidden opacity-0"
        }
        style={{
          opacity: open ? "0.5" : "0",
          display: open ? "block" : "none",
        }}
      ></div>
      <section
        className={
          "fixed top-1/2 left-0 -translate-x-full -translate-y-1/2 bg-light text-black z-[45] w-[90%] shadow-strong rounded-2 px-[28px] py-[22px] transition-all duration-[400ms] lg:duration-[450ms] ease-out"
        }
        style={{
          transform: open
            ? "translateX(-50%) translateY(-50%)"
            : "translateX(-100%) translateY(-50%)",
          left: open ? "50%" : "0",
        }}
      >
        <h2 className="large mb-2">
          {mode === "success"
            ? "Анекта успешно отправлена"
            : "Ошибка. Не удалось отправить анкету"}
        </h2>
        <p>
          {mode === "success"
            ? "Мы свяжемся с вами в течение суток"
            : "Попробуйте связаться с нами, наши контакты указаны на главной странице"}
        </p>
        <button
          onClick={onClose}
          className="button !bg-gray hover:!bg-gray-dark mt-4 w-full"
        >
          Вернуться
        </button>
      </section>
    </>
  );
};

export default StatusPopup;
