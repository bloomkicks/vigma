import MetaHead from "@/components/head-components/MetaHead";
import ModalRoot from "@/components/popups/ModalRoot";
import { mainTitle, mainDescription } from "@/data/meta";

const OfflinePage = () => {
  return (
    <>
      <MetaHead title={mainTitle} description={mainDescription} />
      <main className="section-light !pt-[128px]">
        <h1 className="heading mb-2.5">
          Не удалось обнаружить подключение к сети
        </h1>
        <p>Проверьте своё подключение к сети или попробуйте позже</p>
      </main>
      <ModalRoot />
    </>
  );
};

export default OfflinePage;
