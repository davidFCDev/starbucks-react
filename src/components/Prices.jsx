import { PRICE_LIST } from "../constants";

const Prices = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center px-20 pt-10 pb-4 text-center bg-sb-palid-green">
        <div className="w-full flex flex-col items-center justify-between h-full gap-16">
          <h2 className="font-bold text-3xl">Get your favourites for free</h2>
          <div className="flex gap-12 justify-center items-center">
            {PRICE_LIST.map((price) => (
              <a
                href="#"
                key={price.number}
                className="text-3xl font-semibold flex items-baseline gap-1"
              >
                {price.number}
                <span className="text-base text-amber-600">★</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-14 w-full bg-sb-light-green py-12 justify-center items-center">
        <div>
          <img src={PRICE_LIST[0].image} alt="" width={360} />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold">{PRICE_LIST[0].title}</h3>
          <p className="w-[300px] text-base">{PRICE_LIST[0].subtitle}</p>
        </div>
      </div>
    </main>
  );
};

export default Prices;
