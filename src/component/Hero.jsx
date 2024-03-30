import React from "react";
const Hero = () => {
  return (
    <>
      <section className="max-w-screen-xl py-5 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 py-6">
        
          <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">
            <div className="flex flex-col space-y-2">
              <img className="w-44" src="./src/assets/logo3.png" alt="banner" />
              <h1 className="poppins text-gray-900 font-semibold text-4xl lg:text-4xl leading-relaxed">
                Your Journey<br/>
                <span className="text-5xl">Your Story...</span>
              </h1>
              <p className="text-gray-600 text-light text-md">
                Choose Your Favourite Destination
               
              </p>
            </div>
            <button className="btn-primary py-3 px-4 poppins w-48 mt-6 bg-cyan-400 rounded-md text-black hover:bg-emerald-400">
              Travel Plan
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <img className="max-w-full"
              src="https://img.freepik.com/free-vector/happy-girls-travel-holiday-theme-with-backpack_1308-88800.jpg?t=st=1711735671~exp=1711739271~hmac=65a1963b59299d4833d8b999bc81b8c0aaa6cc0cb0cc2c0f0f001e1c4077c761&w=900"
              alt="bg"
            />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Hero;
