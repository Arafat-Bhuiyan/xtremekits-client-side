import React from "react";

export const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full min-h-screen">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/woman-running.jpg" className="w-full" />
          <div className=" flex flex-col gap-2 absolute top-[30%] left-[9%]">
            <h2 className="text-gray-800 font-semibold text-3xl font-mono">
              Max Fit
            </h2>
            <h1 className="text-gray-800 font-bold text-5xl">
              New tracksuit for women{" "}
            </h1>
            <p className="text-gray-600 font-light text-base">
              Stay stylish and comfortable with our newest women’s tracksuit{" "}
              <br />
              collection, designed for active lifestyles.
            </p>
            <button className="btn btn-soft text-lg rounded-xl w-[25%] h-12 text-slate-100 font-sans">
              Read more
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="flex w-full justify-center gap-2 py-2 absolute bottom-0">
            <a
              href="#slide1"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              1
            </a>
            <a
              href="#slide2"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              2
            </a>
            <a
              href="#slide3"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              3
            </a>
          </div>
        </div>
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/gym-equipment.jpg" className="w-full" />
          <div className=" flex flex-col gap-2 absolute top-[30%] left-[9%]">
            <h2 className="text-gray-100 font-semibold text-3xl font-mono">
              BLAZE
            </h2>
            <h1 className="text-gray-100 font-bold text-5xl">
              Weights of <br /> distribuition{" "}
            </h1>
            <p className="text-gray-50 font-light text-base">
              Efficiently Manage Distribution Weights: <br /> Streamline
              Operations for Optimal <br /> Performance and Results. Maximize
              Performance.
            </p>
            <button className="btn btn-soft text-lg bg-slate-200 hover:bg-slate-300 rounded-xl w-[45%] h-12 text-slate-800 font-sans">
              Read more
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="flex w-full justify-center gap-2 py-2 absolute bottom-0">
            <a
              href="#slide1"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              1
            </a>
            <a
              href="#slide2"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              2
            </a>
            <a
              href="#slide3"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              3
            </a>
          </div>
        </div>
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/fitness-accessories.jpg" className="w-full" />
          <div className=" flex flex-col gap-2 absolute top-[30%] left-[9%]">
            <h2 className="text-gray-800 font-semibold text-3xl font-mono">
              agile
            </h2>
            <h1 className="text-gray-900 font-bold text-5xl">
              Professional <br /> equipment{" "}
            </h1>
            <p className="text-gray-600 font-light text-base">
              Unleash the power of professional <br /> equipment: elevate your
              performance <br /> with precision and expertise. It’s your
              performance.
            </p>
            <button className="btn btn-soft text-lg rounded-xl w-[45%] h-12 text-slate-100 font-sans">
              Read more
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="flex w-full justify-center gap-2 py-2 absolute bottom-0">
            <a
              href="#slide1"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              1
            </a>
            <a
              href="#slide2"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              2
            </a>
            <a
              href="#slide3"
              className="btn btn-xs btn-circle bg-slate-200 hover:bg-slate-300 text-gray-600"
            >
              3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
