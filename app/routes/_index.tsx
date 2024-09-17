import { MetaFunction } from "@remix-run/node";
import MouseEffect from "./mous";
import Nav from "./navigation";
import Sections from "./sections";

export const meta: MetaFunction = () => {
  return [
    { title: "Чернышева Анна" }
  ];
};

export default function Index() {
  return (
    <main>
      <div className="portfolio __variable_20b187 group/spotlight relative">
        <MouseEffect />
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
                <Nav />
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
              <Sections />
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

  );
}
