import Navbar from "./components/Navbar";
import StickyNav from "./components/StickyNav";
import Hero from "./components/Hero";
import Start from "./components/Start";
import Prices from "./components/Prices";
import Extras from "./components/Extras";
import Stars from "./components/Stars";
import Rewards from "./components/Rewards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <StickyNav />
      <Hero />
      <Start />
      <Prices />
      <Extras />
      <Stars />
      <Rewards />
      <Footer />
    </div>
  );
}

export default App;
