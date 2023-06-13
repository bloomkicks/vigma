import Head from "next/head";
import Scripts from "@/components/head-components/Scripts";

const MainHead = () => {
  return (
    <Head>
      <title>
        Кухни На Заказ От Фабрики в СПБ - Удобство и стиль для вашего
        дома - Вигма Мебель
      </title>
      <meta
        name="description"
        content="Кухни от производителя в СПБ и Лен. области - Дизайн-проект, консультация специалистов и гарантия 3 года в подарок - Быстрое производство и доставка от 14 дней"
      />
      <Scripts />
    </Head>
  );
};

export default MainHead;
