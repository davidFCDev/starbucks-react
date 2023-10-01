const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-6">
      <div className="flex gap-10 items-center font-bold">
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-png-transparent.png"
          alt="starbucks rewards logo"
          width={50}
        />
        <h4>MENU</h4>
        <h4>REWARDS</h4>
        <h4>GIFT CARDS</h4>
      </div>
      <div className="flex gap-10 items-center font-semibold">
        <h4>Find a Store</h4>
        <div className="flex gap-4">
          <a
            href="https://www.starbucks.com/account/signin"
            className="border border-black rounded-3xl px-4 py-1"
          >
            Sign In
          </a>
          <button className="border border-black bg-black text-white rounded-3xl px-4 py-1">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
