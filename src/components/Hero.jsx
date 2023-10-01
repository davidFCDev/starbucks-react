const Hero = () => {
  return (
    <div className="hero flex items-center justify-start px-12">
      <div className="text-left py-5 w-[300px] flex flex-col gap-6 items-start">
        <h2 className="text-4xl tracking-wide font-semibold leading-snug w-[260px]">
          FREE COFFEE IS A TAP AWAY
        </h2>
        <p>Join now to start earning Rewards.</p>
        <button className="border border-sb-green bg-sb-green text-white font-semibold rounded-3xl px-4 py-1 hover:bg-sb-green-light transation-all">
          Join now
        </button>
        <p className="small">
          Or <a href="/">join in the app</a> for the best experience
        </p>
      </div>
    </div>
  );
};

export default Hero;
