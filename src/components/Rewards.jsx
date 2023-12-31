const Rewards = () => {
  return (
    <div>
      <div className="flex flex-col text-left gap-6 px-64 py-28 w-[80%]">
        <h2 className="font-semibold text-3xl">Questions?</h2>
        <p className="text-lg">
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked questions{" "}
          <span className="underline hover:no-underline">right over here</span>.
        </p>
      </div>

      <footer className="flex bg-sb-gray2 w-full px-5 py-10 text-sm">
        <div className="flex flex-col gap-4 w-[50%] p-5 justify-center ">
          <p>At participating stores. Restrictions apply.</p>
          <h3 className="font-semibold">EARNING STARS</h3>
          <p>
            Stars cannot be earned on purchases of alcohol, Starbucks Cards or
            Starbucks Card reloads.
          </p>
          <p>
            Earn 1 Star per $1 spent when you scan your member barcode in the
            app, then pay with cash, credit/debit cards or mobile wallets at
            participating stores. You can also earn 1 Star per $1 spent when you
            link a payment method and pay directly through the app.
          </p>
          <p>
            Earn 2 Stars per $1 spent when you load funds and pay with your
            digital Starbucks Card in the app. You can also earn 2 Stars per $1
            spent when you pay in-person at a participating store with your
            registered physical Starbucks Card or scan your member barcode in
            the app, and then use any physical Starbucks Card (regardless of
            whether it is registered) to complete the purchase.
          </p>
          <h3 className="font-semibold">BENEFITS</h3>
          <p>
            Free refills available during same in-store visit only. To qualify
            for the Birthday Reward, you must have made at least one
            Star-earning transaction.
          </p>
        </div>

        <div className="flex flex-col w-[50%] p-5 justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">TERMS OF USE</h3>
            <p>
              For full program details visit{" "}
              <span className="underline hover:no-underline">
                starbucks.com/rewards/terms
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">REDEEMING REWARDS</h3>
            <p>
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. Not all stores honor tiered Rewards. Select stores redeem
              150 Stars for free food or drink items only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rewards;
