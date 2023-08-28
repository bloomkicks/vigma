import MetaHead from "@/components/head-components/MetaHead";
import ModalRoot from "@/components/popups/ModalRoot";
import { errorTitle, errorDescription } from "@/data/meta";

const ErrorPage = () => {
  return (
    <>
      <MetaHead title={errorTitle} description={errorDescription} />
      <main className="section-light !pt-[128px]">
        <h1 className="heading mb-2.5">
          Не удалось найти страницу по данному адресу
        </h1>
        <p>
          Попробуйте воспользоваться меню навигации сверху страницы
          <span className="lg:hidden">, нажав на кнопку справа</span>
        </p>
      </main>
      <ModalRoot />
    </>
  );
};

export default ErrorPage;
