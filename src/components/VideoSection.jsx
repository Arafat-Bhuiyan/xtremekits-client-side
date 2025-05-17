import React from "react";

export const VideoSection = () => {
  return (
    <div className="bg-slate-100 text-gray-700 font-serif mx-10 pb-10">
      <h1 className="font-bold text-xl">Professional sports products</h1>
      <p className="font-light text-xs text-gray-500">
        We specialize in a variety of professional sports products.​
      </p>
      <div className="relative h-80 mt-4 px-2 py-6 w-full bg-blue-400 rounded-md flex gap-4">
        <div className="flex justify-start items-center w-1/2 pl-24 gap-8">
          {/* 1 */}
          <div>
            <h1 className="text-base font-semibold text-white font-sans">
              A driendly team works for you
            </h1>
            <p className="text-xs text-gray-200 font-thin font-sans">
              Some teams bring a smile to your face, while others are truly
              supportive.
            </p>
          </div>
          {/* 2 */}
          <div>
            <h1 className="text-base font-semibold text-white font-sans">
              Professional grade equipment
            </h1>
            <p className="text-xs text-gray-200 font-thin font-sans">
              Professional grade equipment not only meets expectations but also
              surpasses them.
            </p>
          </div>
          {/* 3 */}
          <div>
            <h1 className="text-base font-semibold text-white font-sans">
              Time-tested product manufacturers
            </h1>
            <p className="text-xs text-gray-200 font-thin font-sans">
              Time-tested product trusted manufacturers deliver reliable goods.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="absolute bottom-16 right-28 rounded-lg shadow-lg">
          <iframe
            className="w-[460px] h-[315px] rounded-lg"
            src="https://www.youtube.com/embed/Osd4DLpMNp4?si=Z_mRLhAX1iLzttSs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
