import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white px-4 py-[10rem]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto bg-white" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-8">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#03db97] w-[200px] mx-auto rounded-md my-6 py-2 font-medium text-black hover:opacity-80 transition duration-200">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-transparent flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto bg-white" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium mt-8">
            <p className="py-2 border-b mx-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-black w-[200px] mx-auto rounded-md my-6 py-2 font-medium text-[#00df9a] hover:opacity-80 transition duration-200">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto bg-white" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium mt-8">
            <p className="py-2 border-b mx-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#03db97] w-[200px] mx-auto rounded-md my-6 py-2 font-medium text-black hover:opacity-80 transition duration-200">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
