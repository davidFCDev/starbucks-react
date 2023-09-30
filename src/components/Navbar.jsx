const Navbar = () => {
  return (
    <div>
      <div className="flex">
        <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-png-transparent.png" alt="starbucks rewards logo" width={50}/>
        <h3>MENU</h3>
        <h3>REWARDS</h3>
        <h3>GIFT CARDS</h3>
      </div>
      <div>
        <h3>Find a Store</h3>
        <a href="https://www.starbucks.com/account/signin">Sign In</a>
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Navbar;
