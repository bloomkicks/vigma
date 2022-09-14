const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  webpack(config, options) {
    config.optimization = {
      minimize: true,
      minimizer: [new HtmlMinimizerPlugin(), new CssMinimizerPlugin()],
    };
    return config;
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  env: {
    SERVICE_ID: "service_kiq0jp9",
    TEMPLATE_ID: "template_hci5war",
    USER_ID: "user_2FU0yfDjTaoUzX8yIWhal",

    // ASSETS
    MAIN_ASSETS: "./pictures/main",
    QUIZ_ASSETS: "./pictures/quiz",
    CONTACTS_ASSETS: "./pictures/contacts",
    WORKS_ASSETS: "./pictures/works",
    ABOUT_US_ASSETS: "./pictures/about-us",
    REVIEWS_ASSETS: "./pictures/reviews",
    GENERAL_ASSETS: "./pictures/general",

    // META
    MAIN_TITLE: "Мебель на Заказ от Производителя в СПб - Vigma/Вигма",
    MAIN_DESCRIPTION:
      "Качественная корпусная мебель на заказ. Быстрое производство и доставка от 4 дней. Широкий ассортимент - кухни, шкафы, кровати, прихожие ...",

    ERROR_TITLE: "Ошибка, попробуйте другую страницу - VIGMA",
    ERROR_DESCRIPTION: "Что-то пошло не так",

    ABOUT_US_TITLE: "О Нас - VIGMA",
    ABOUT_US_DESCRIPTION:
      "Мы занимаемся изготовлением, сборкой, распилом, доставкой и установкой корпусной мебели на заказ",

    CONTACTS_TITLE: "Контакты - VIGMA",
    CONTACTS_DESCRIPTION:
      "Есть вопрос? Задайте его нам: +7 (812) 642 60-51 | vigmaspb@gmail.com",

    ORDER_TITLE: "Рассчитать Стоимость - VIGMA",
    ORDER_DESCRIPTION: "Узнайте стоимость и получите подарок",

    WORKS_TITLE: "Наши работы - VIGMA",
    WORKS_DESCRIPTION:
      "Каталог уже выполненных работ, источник для вдохновения",
  },
};
