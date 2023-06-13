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
    <section
      className={
        "fixed top-1/2 left-0 -translate-x-full -translate-y-1/2 bg-light text-black z-[45] w-[90%] shadow-strong rounded-2 px-[28px] py-[22px] transition-all duration-[400ms] lg:duration-[450ms] ease-out max-w-[500px]"
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
        onClick={() => onClose}
        className="button !bg-gray hover:!bg-gray-dark mt-4 w-full"
      >
        Вернуться
      </button>
    </section>
  );
};

export default StatusPopup;
