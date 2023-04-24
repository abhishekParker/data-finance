import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img classname="w-[500px] mx-auto my-4" src={Laptop} alt="laptop.png" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl font-bold py-2 sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptatem unde deserunt sequi natus magnam aspernatur vel
            cupiditate? Qui provident autem rem perspiciatis architecto! Quod,
            alias possimus. Ipsum, laborum quas.
          </p>
          <button className="bg-black w-[200px] mx-auto md:mx-0 rounded-md my-6 py-2 font-medium text-[#00df9a] hover:opacity-90 transition duration-200">
            Get Stated
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
