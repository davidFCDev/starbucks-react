const Start = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-32 text-center gap-12">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Getting started is easy</h2>
        <p className="text-lg">Earn Stars and get rewarded in a few easy steps.</p>
      </div>
      <div className="flex items-center justify-around gap-10">
        <div className="flex flex-col justify-center items-center gap-6 w-[400px]">
          <h2 className="border-2 border-sb-green text-sb-green rounded-full w-10 h-10 pt-1 text-xl font-semibold">
            1
          </h2>
          <h3 className="font-semibold text-xl">Create an account</h3>
          <p className="text-lg">
            To get started, join now. You can also join in the app to get access
            to the full range of Starbucks® Rewards benefits.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 w-[400px]">
          <h2 className="border-2 border-sb-green text-sb-green rounded-full w-10 h-10 pt-1 text-xl font-semibold">
            2
          </h2>
          <h3 className="font-semibold text-xl">Order and pay how you’d like</h3>
          <p className="text-lg">
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways. Learn how
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 w-[400px]">
          <h2 className="border-2 border-sb-green text-sb-green rounded-full w-10 h-10 pt-1 text-xl font-semibold">
            3
          </h2>
          <h3 className="font-semibold text-xl">Earn Stars, get Rewards</h3>
          <p className="text-lg">
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
