import { MetaFunction } from "@remix-run/node";
import { itemNav, projects } from "./const";

export const meta: MetaFunction = () => {
  return [
    { title: "Чернышева Анна" }
  ];
};

export default function Index() {
  return (
    <div>
      <main>
        <div className="portfolio __variable_20b187 group/spotlight relative">
          <div className="portfolio__mous pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="portfolio__content lg:flex lg:justify-between lg:gap-4">
              <div className="portfolio__static static lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div className="static__info">
                  <h1 className="static__title text-4xl mb-3 font-bold tracking-tight text-slate-200 sm:text-5xl">
                    Чернышева Анна
                  </h1>
                  <h2 className="static__prof mb-4 text-lg font-medium tracking-tight text-slate-200 sm:text-xl ">
                    Junior Frontend
                  </h2>
                  <p className="static__descr mb-16 max-w-xs leading-normal">
                    Я&nbsp;создаю pixel-perfect, совершенствуя привлекательность и&nbsp;доступность.
                  </p>
                  <nav className="static__nav nav hidden lg:block" aria-label="Ссылки для перехода на странице">
                    <ul className="nav__list w-max">
                      {itemNav.map(item => (
                        <li key={item.href} className="nav__item">
                          <a href={`${item.href}`} className="nav__link group flex items-center py-3 active">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                              {`${item.text}`}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <ul className="ml-1 mt-8 flex items-center" aria-label="Социальные сети">
                  <li className="social__item mr-5 text-xs shrink-0">
                    <a className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener" href="https://github.com/Ann4j" aria-label="Github">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256" width="50px" height="50px" fill="currentColor">
                          <g transform="scale(5.12,5.12)">
                            <path
                              d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z">
                            </path>
                          </g>
                      </svg>
                    </a>
                  </li>
                  <li className="social__item mr-5 text-xs shrink-0">
                    <a className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/anna.chernysheva.s?igsh=MTdiZWY5OGo5cjloNA%3D%3D&utm_source=qr" aria-label="Instagram">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256" width="50px" height="50px" fill="currentColor">
                          <g transform="scale(5.12,5.12)">
                            <path
                              d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z">
                            </path>
                          </g>
                      </svg>
                    </a>
                  </li>
                  <li className="social__item mr-5 text-xs shrink-0">
                    <a className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener" href="https://t.me/chernyshevaanna" aria-label="Telegram">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256" width="50px" height="50px" fill="currentColor">
                          <g transform="scale(5.12,5.12)">
                            <path
                              d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23zM32.934,34.375c0.423,-1.298 2.405,-14.234 2.65,-16.783c0.074,-0.772 -0.17,-1.285 -0.648,-1.514c-0.578,-0.278 -1.434,-0.139 -2.427,0.219c-1.362,0.491 -18.774,7.884 -19.78,8.312c-0.954,0.405 -1.856,0.847 -1.856,1.487c0,0.45 0.267,0.703 1.003,0.966c0.766,0.273 2.695,0.858 3.834,1.172c1.097,0.303 2.346,0.04 3.046,-0.395c0.742,-0.461 9.305,-6.191 9.92,-6.693c0.614,-0.502 1.104,0.141 0.602,0.644c-0.502,0.502 -6.38,6.207 -7.155,6.997c-0.941,0.959 -0.273,1.953 0.358,2.351c0.721,0.454 5.906,3.932 6.687,4.49c0.781,0.558 1.573,0.811 2.298,0.811c0.725,0 1.107,-0.955 1.468,-2.064z">
                            </path>
                          </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="portfolio__scroll pt-24 lg:w-1/2 lg:py-24">
                <section id="about" className="about mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Обо мне">
                  <div className="about__content">
                    <p className="about__descr mb-4">
                      Лишь в&nbsp;прошлом году я&nbsp;окончательно решила погрузиться в&nbsp;мир разработки
                      и&nbsp;попробовать себя в&nbsp;создании интерфейсов. С&nbsp;тех пор я&nbsp;выполняла проекты
                      в&nbsp;рамках обучения
                      на&nbsp;платформе
                      &nbsp;
                      <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://skillbox.ru/" target="_blank" rel="noreferrer noopener" aria-label="Skillbox">
                        Skillbox
                      </a>.
                    </p>
                    <p className="about__descr mb-4">
                      Сейчас я&nbsp;сосредоточена на&nbsp;разработке сайта
                      &nbsp;
                      <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://skillbox.ru/" target="_blank" rel="noreferrer noopener" aria-label="Skillbox">
                        мебели
                      </a>,
                      параллельно изучая современные
                      инструменты и&nbsp;совершенствуя свои навыки. Больше всего мне нравится находиться на&nbsp;стыке
                      дизайна и&nbsp;инженерии.
                    </p>
                    <p className="about__descr mb-4">
                      Размышляя о моей конечной цели, я понимаю, что у самурая есть только путь.
                      На&nbsp;этом пути я&nbsp;стремлюсь получить опыт работы в&nbsp;команде&nbsp;, в разработке с&nbsp;искусственным интеллектом и в свободное время сделать web app.
                    </p>
                    <p className="about__descr mb-4">
                      Когда я&nbsp;не&nbsp;за&nbsp;компьютером, можно найти меня на&nbsp;коврике для
                      &nbsp;
                      <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://youtu.be/gTebJ1Px6yE?si=SHP0tQCBcLSwgT6y" target="_blank" rel="noreferrer noopener" aria-label="Skillbox">
                        фитнеса
                      </a>,
                      до разработки я посветила 5 лет фитнес индустрии. За&nbsp;хорошей книгой или в&nbsp;кругу близких. А&nbsp;иногда я&nbsp;отправляюсь исследовать мир
                      сквозь объектив  &nbsp;
                      <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://ru.pinterest.com/anneclka/_created/" target="_blank" rel="noreferrer noopener" aria-label="Pinterest">
                        пленочной камеры
                      </a>
                      &nbsp;&mdash; ведь красота повсюду.
                    </p>
                  </div>
                </section>
                <section id="project" className="project mb-10 scroll-mt-16 md:mb-10 lg:mb-10 lg:scroll-mt-24">
                  <div className="project__content">
                    <ul className="project__list group/list">
                      {projects.map(project => (
                        <li key={project.title} className="project__item mb-12">
                          <div className="project__card card group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="card__content z-10 sm:order-2 sm:col-span-6">
                              <h3 className="card__title">
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={project.link} target="_blank" rel="noreferrer noopener" aria-label="Профиль Радио W-wave (откроется в новой вкладке)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span> {`${project.title}`}
                                    <span className="inline-block">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </h3>
                              <p className="card__descr">
                                {`${project.descr}`}
                              </p>
                              <ul className="card__list mt-2 flex flex-wrap">
                                {project.technology.map(item => (
                                  <li key={item} className="card__item mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                      {`${item}`}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <img src={project.imgUrl} alt={project.title} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                <div id="resume" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                  <a target="_blanc" className="inline-flex items-center leading-tight text-slate-200 font-semibold group" aria-label="View Full Project Archive" href="/resume.pdf">
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        Посмотреть полное резюме
                      </span>
                      <span className="whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <footer className=" max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                  <p>Спроектировано в&nbsp; 
                    <a href="https://www.figma.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Figma (opens in a new tab)">
                      Figma
                    </a>,&nbsp; 
                    написан код в&nbsp;
                    <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)">
                      Visual Studio Code
                    </a>.&nbsp; 
                    Создано с использованием&nbsp; 
                    <a href="https://www.typescriptlang.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)">
                      TypeScript
                    </a>&nbsp; 
                    и&nbsp; 
                    <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">
                      Tailwind CSS
                    </a>,&nbsp; 
                    собрано в&nbsp; 
                    <a href="https://vitejs.dev/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Vercel (opens in a new tab)">
                      Vite
                    </a>.
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div >

  );
}
