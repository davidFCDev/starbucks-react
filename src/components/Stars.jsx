const Stars = () => {
  return (
    <main>
      <div className="bg-sb-gray flex flex-col px-10 py-14 text-center gap-20 w-full items-center border-b border-black font-semibold">
        <div className="flex flex-col items-center justify-between h-full gap-6 w-[750px]">
          <h2 className="font-bold text-3xl">Cash or card, you earn Stars</h2>
          <p className="text-center text-lg">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>

        <div className="flex gap-24 text-left justify-start w-full">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl flex items-center gap-1">1<span className="text-lg">★</span>  per dollar</h3>
            <p>Pay as you go</p>
          </div>
          <div className="flex gap-5 items-start pl-6">
            <img
              src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/1A.png"
              alt=""
              width={110}
            />
            <div className="flex flex-col gap-4 w-[320px]">
              <h3 className="font-semibold text-lg">Scan and pay separately</h3>
              <p>Use cash or credit/debit card at the register.</p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <img
              src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/1B.png"
              alt=""
              width={110}
            />
            <div className="flex flex-col gap-4 w-[320px]">
              <h3 className="font-semibold text-lg">Save payment in the app</h3>
              <p>
                Check-out faster by saving a credit/debit card or PayPal to your
                account. You’ll be able to order ahead or scan and pay at the
                register in one step.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sb-gray flex flex-col px-10 py-14 text-center gap-20 text-lg w-full items-center font-semibold">
        <div className="flex gap-24 text-left justify-start w-full">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl flex items-center gap-1">2<span className="text-lg">★</span> per dollar</h3>
            <p>Add funds in the app</p>
          </div>
          <div className="flex gap-5 items-start">
            <img
              src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/2A.png"
              alt=""
              width={110}
            />
            <div className="flex flex-col gap-4 w-[320px]">
              <h3 className="font-semibold text-lg">Preload</h3>
              <p>
                To save time and earn Stars twice as fast, add money to your
                digital Starbucks Card using any payment option. Scan and pay in
                one step or order ahead in the app.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <img
              src="https://www.starbucks.ca/weblx/images/rewards/ways-to-pay/2B.png"
              alt=""
              width={110}
            />
            <div className="flex flex-col gap-4 w-[320px]">
              <h3 className="font-semibold text-lg">Register your gift card</h3>
              <p>
                Then use it to pay through the app. You can even consolidate
                balances from multiple cards in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stars;
