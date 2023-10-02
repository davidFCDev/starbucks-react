import { useState } from "react";
import { PRICE_LIST } from "../constants";

const Prices = () => {
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(null);

  const handlePriceClick = (index) => {
    setSelectedPriceIndex(index);
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center px-20 pt-10 pb-4 text-center bg-sb-palid-green">
        <div className="w-full flex flex-col items-center justify-between h-full gap-16">
          <h2 className="font-bold text-3xl">Get your favourites for free</h2>
          <div className="flex gap-12 justify-center items-center">
            {PRICE_LIST.map((price, index) => (
              <button
                key={price.number}
                className="text-3xl font-semibold flex items-baseline gap-1"
                onClick={() => handlePriceClick(index)}
              >
                {price.number}
                <span className="text-base text-amber-600">★</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-14 w-full bg-sb-light-green py-12 justify-center items-center">
        <div>
          <img
            src={
              selectedPriceIndex !== null
                ? PRICE_LIST[selectedPriceIndex].image
                : ""
            }
            alt=""
            width={360}
            className={`fade ${selectedPriceIndex !== null ? 'visible' : 'invisible'}`}
          />
        </div>
        <div className="flex flex-col gap-5 w-[300px]">
          <h3 className="text-2xl font-semibold">
            {selectedPriceIndex !== null
              ? PRICE_LIST[selectedPriceIndex].title
              : ""}
          </h3>
          <p className=" text-base">
            {selectedPriceIndex !== null
              ? PRICE_LIST[selectedPriceIndex].subtitle
              : ""}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Prices;
