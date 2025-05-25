import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ProductSection = ({ items }) => {
  const navigate = useNavigate();
  const handleViewDetails = (_id) => {
    navigate(`/items/${_id}`);
  };
  return (
    <div className="p-9">
      <h1 className="font-bold text-xl pl-4">Most popular products</h1>
      <p className="font-light text-xs text-gray-500 pl-4">
        Browse through our collection of must-haves
      </p>
      <div className="grid md:grid-cols-3 gap-4 px-4">
        {/* Cards */}
        {items.map((item) => (
          <div key={item.id} className="card w-96 mt-4 bg-slate-100 shadow-xl">
            <figure>
              <img src={item.imageurl} alt="Shoes" />
            </figure>
            <div className="card-body bg-white rounded-lg">
              <h2 className="card-title text-2xl">{item.name}</h2>
              <p className="text-gray-500 font-semibold text-lg">
                Price: {item.price}
              </p>
              <p className="text-gray-500 font-semibold text-lg">
                Rating: {item.rating}
              </p>
              <p className="text-gray-500 font-semibold text-lg">
                Stock: {item.stock}
              </p>
              <div className="card-actions flex justify-center">
                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="bg-slate-600 hover:bg-slate-700 rounded-xl w-[35%] h-10 text-sm text-slate-100 font-bold font-sans"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className="flex justify-center" to="/all-sports-equipment">
        <button className="btn btn-active btn-ghost mt-4">
          See All Products
        </button>
      </Link>
    </div>
  );
};
