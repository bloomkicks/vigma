const ErrorPage = () => {
  return (
    <main className="section-light !pt-[128px]">
      <h1 className="heading mb-2.5">
        Страницы по данному адресу не найдено
      </h1>
      <p>
        Попробуйте воспользоваться навигацией сверху сайта
        <span className="lg:hidden">
          , нажав на кнопку справа сверху
        </span>
      </p>
    </main>
  );
};

export default ErrorPage;
