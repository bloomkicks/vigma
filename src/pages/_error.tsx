import MetaHead from "@/components/head-components/MetaHead";
import Popup from "@/components/popups/Popup";
import { errorTitle, errorDescription } from "@/data/meta";

const ErrorPage = () => {
  return (
    <>
      <MetaHead title={errorTitle} description={errorDescription} />
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
      <Popup />
    </>
  );
};

export default ErrorPage;
