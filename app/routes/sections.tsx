import { projects } from "./const";


const Sections = () => {


  return (
    <div>
      <section
        id="about"
        className="about mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Обо мне">
        <div className="about__content">
          <p className="about__descr mb-4">
            В&nbsp;2023 году я&nbsp;решила полностью погрузиться в&nbsp;мир разработки, начав с&nbsp;создания собственных pet-проектов. Эти проекты не&nbsp;только подтвердили моё желание заниматься разработкой, но&nbsp;и&nbsp;заложили прочную основу для дальнейшего профессионального роста.
          </p>
          <p className="about__descr mb-4">
            Каждый новый проект становится шагом на&nbsp;моём пути, который складывается в&nbsp;синтез опыта, яркого и&nbsp;по-настоящему оригинального. Находясь на&nbsp;стыке дизайна и&nbsp;инженерии, я&nbsp;постоянно ищу способы создавать решения, которые впечатляют своей смелостью и&nbsp;продуманностью.
          </p>
          <p className="about__descr mb-4">
            Размышляя о моей конечной цели, я понимаю, что у самурая есть только путь.
          </p>
        </div>
      </section>
      <section
        id="project"
        className="project mb-10 scroll-mt-16 md:mb-10 lg:mb-10 lg:scroll-mt-24">
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
      <section
        id="resume"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div>
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
      </section>
    </div>
  )
};

export default Sections;