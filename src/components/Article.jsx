import React from "react";

export const Article = () => {
  return (
    <div className="bg-slate-100 text-gray-700 font-serif mx-10 pb-10">
      <h1 className="font-bold text-xl">Our articles</h1>
      <p className="font-light text-xs text-gray-500">
        Explore insights and knowledge in our articles
      </p>
      <div className="flex gap-8 justify-center items-center font-serif w-80% mt-4">
        <div className="flex">
          <img
            src="/img/streaching.jpg"
            className="w-3/4 h-3/4 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center gap-2 pl-4">
            <h1 className="text-lg font-bold">
              Stretch to Strength: Unlock Your Body’s Potential
            </h1>
            <p className="text-xs">
              Stretch to Strength: Unlock Your Body’s Potential" highlights how
              stretching contributes to flexibility and strength, suitable for
              yoga and injury...
            </p>
            <button className="btn btn-soft bg-slate-600 hover:bg-slate-700 rounded-lg w-24 h-6 text-xs text-slate-100 font-sans">
              View more
            </button>
          </div>
        </div>
        <div className="flex">
          <img
            src="/img/cycling.jpg"
            className="w-3/4 h-3/4 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center gap-2 pl-4">
            <h1 className="text-lg font-bold">
              Ride the Revolution: Cycling into a Healthier You
            </h1>
            <p className="text-xs">
              Power on Pedals: The Core Benefits of Cycling" focuses on
              strength, stamina, and cardiovascular improvements, making it
              perfect for visuals promoting cycling...
            </p>
            <button className="btn btn-soft bg-slate-600 hover:bg-slate-700 rounded-lg w-24 h-6 text-xs text-slate-100 font-sans">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
