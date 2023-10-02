import { PRICE_LIST } from "../constants";

const Prices = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 pt-16 pb-4 text-center gap-12 bg-sb-palid-green">
      <div className="w-full flex flex-col items-center justify-between h-full gap-12">
        <h2 className="font-bold text-3xl">Get your favourites for free</h2>
        <div className="flex gap-12 justify-center items-center">
          {PRICE_LIST.map((price) => (
            <h3
              key={price.number}
              className="text-3xl font-semibold flex items-baseline gap-1"
            >
              {price.number}
              <span className="text-base text-amber-600">★</span>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
