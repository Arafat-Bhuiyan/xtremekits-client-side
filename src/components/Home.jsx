import React from "react";
import { Carousel } from "./Carousel";
import { ProductSection } from "./ProductSection";
import { useLoaderData } from "react-router-dom";

export const Home = () => {
  const products = useLoaderData();
  return (
    <div className="bg-slate-100 text-gray-700 font-serif">
      <Carousel></Carousel>
      <ProductSection items={products}></ProductSection>
    </div>
  );
};
