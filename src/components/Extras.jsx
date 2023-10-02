const Extras = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-32 text-center gap-12">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl">Endless extras</h2>
        <p>
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </p>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src="https://www.starbucks.ca/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="" width={110}/>
          <h3>Fun freebies</h3>
          <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
          <a href="#">Learn more</a>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src="https://www.starbucks.ca/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="" width={110}/>
          <h3>Order & pay ahead</h3>
          <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
          <a href="#">Learn more</a>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src="https://www.starbucks.ca/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="" width={110}/>
          <h3>Get to free faster</h3>
          <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Extras;
