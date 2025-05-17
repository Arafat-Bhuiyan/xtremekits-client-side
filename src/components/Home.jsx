import React from "react";
import { Carousel } from "./Carousel";
import { ProductSection } from "./ProductSection";
import { useLoaderData } from "react-router-dom";
import { Article } from "./Article";
import { VideoSection } from "./VideoSection";

export const Home = () => {
  const products = useLoaderData();
  return (
    <div className="bg-slate-100 text-gray-700 font-serif">
      <Carousel></Carousel>
      <ProductSection items={products}></ProductSection>
      <Article></Article>
      <VideoSection></VideoSection>
    </div>
  );
};
