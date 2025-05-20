import React from "react";
import { useLoaderData } from "react-router-dom";

export const ViewItem = () => {
  const item = useLoaderData();
  const { category, description, imageurl, name, price, rating, stock } = item;

  return (
    <div>
      <div className="hero min-h-screen bg-slate-100 text-gray-700">
        <div className="hero-content flex-col lg:flex-row">
          <img src={imageurl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="text-4xl text-orange-500 font-bold mt-3">${price}</p>
            <p className="py-4 text-xl">{description}</p>
            <p className="font-bold">
              Category:{" "}
              <span className="font-normal text-gray-500">{category}</span>
            </p>
            <p className="font-bold">
              Rating:{" "}
              <span className="font-normal text-gray-500">{rating}</span>
            </p>
            <p className="font-bold">
              Stock: <span className="font-normal text-gray-500">{stock}</span>
            </p>

            <div className="py-3 flex gap-4 items-center">
              <p className="font-bold text-xl">Size:</p>
              <button className="btn btn-circle bg-slate-100 text-gray-700 text-lg font-bold">
                XS
              </button>
              <button className="btn btn-circle bg-slate-100 text-gray-700 text-lg font-bold">
                S
              </button>
              <button className="btn btn-circle bg-slate-100 text-gray-700 text-lg font-bold">
                M
              </button>
              <button className="btn btn-circle bg-slate-100 text-gray-700 text-lg font-bold">
                L
              </button>
              <button className="btn btn-circle bg-slate-100 text-gray-700 text-lg font-bold">
                XL
              </button>
            </div>
            <button className="btn bg-gray-700">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};
