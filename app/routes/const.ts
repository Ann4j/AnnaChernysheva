import image1 from "./assets/i18n.png";
import image2 from "./assets/carousel.png";
import image3 from "./assets/sidebar.png";

export const itemNav = [
  {
    href: "#about",
    text: "Обо мне",
  },
  {
    href: "#project",
    text: "Проекты",
  },
  {
    href: "#resume",
    text: "Резюме",
  },
];

export const projects = [
  {
    link: "https://www.npmjs.com/package/i18n-ai-lite",
    title: "Open source i18n-ai-lite",
    descr:
      "Пакет для автоматизации локализации приложения на базе ai-моделей. Решает задачу синхронизации и перевода строк интерфейса, упрощая поддержку мультиязычных проектов. Может использоваться как в небольших приложениях, так и в крупных системах с динамически обновляемым контентом.",
    imgUrl: image1,
    technology: ["React","TypeScript"],
  },
  {
    link: "https://ann4j.github.io/ts-react-timeline-carousel/",
    title: "Интерактивная карусель для отображения событий",
    descr: "Компонент для визуализации событий в виде интерактивного таймлайна с прокруткой. Удобен для интеграции в современные фронтенд-проекты.",
    imgUrl: image2,
    technology: ["React","Gsap","Swiper","Scss"],
  },
  {
    title: "Компонент sidebar",
    descr:
      "Небольшой ui компонент - на его примере я поработала со styled-components. Вдохновлялась shacdn.",
    imgUrl: image3,
    technology: ["React","Styled-components","Scss"],
  },
];
