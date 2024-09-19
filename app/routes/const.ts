
import image1 from './assets/project-1.jpg';
import image2 from './assets/project-2.jpg';
import image3 from './assets/project-3.jpg';
import image4 from './assets/project-4.jpg';
import image5 from './assets/project-5.jpg';
import image6 from './assets/project-6.png';


export const itemNav = [
    {
        href: "#about",
        text: "Обо мне"
    },
    {
        href: "#project",
        text: "Проекты"
    },
    {
        href: "#resume",
        text: "Резюме"
    }
]

export const projects = [
    {
        link:"https://ann4j.github.io/creativeAgency/",
        title: "Страница креативного агентства",
        descr: "Реализация анимации загрузки сайта и открытия бургер-меню.",
        imgUrl: image2,
        technology:["HTML","CSS","GreenSock","JS"]
    },
    {
        link:"https://hightpass.netlify.app/",
        title: "Фотостудию «High pass»",
        descr: "На сайте есть информация о услугах, предыдущих проектах студии, подписка на рассылку и форма для связи с клиентами.",
        imgUrl: image4,
        technology:["Pug","SCSS","Parcel"]
    },
    {
        link:"https://ann4j.github.io/W-Wave/",
        title: "Радио W-Wave",
        descr: "Сайт радио W-Wave будет современным и удобным агрегатором всех эфиров и подкастов.Основной фокус — адаптивность для мобильных устройств.",
        imgUrl: image1,
        technology:["HTML","CSS"]
    },
    {
        title: "Интернет-магазин мебели SitDownPls",
        descr: "Упор на универсальную верстку компонентов, чтобы была возможность скопировать элемент и использовать на любой странице сайта. Находится прямо сейчас в разработке.",
        imgUrl: image5,
        technology:["Pug","SCSS","Webpack"]
    },
    {
        link:"https://github.com/Ann4j/CRM",
        title: "CRM",
        descr: "Программа, в которой можно работать с контактной информацией всех учеников. Добавление и просмотр контактной информации, добавление и изменение данных.",
        imgUrl: image3,
        technology:["HTML","CSS", "JS"]
    },
    {
        link:"https://github.com/Ann4j/NoteList",
        title: "Список заметок",
        descr: "Реализация авторизации, регистрации и входа пользователя. Отображение списка заметок и функция добавления. Функционал в данный момент дополняется.",
        imgUrl: image6,
        technology:["TypeScript","React","Vite"]
    },
];
