import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <main className="flex flex-col p-10">
      <div className="flex border-y border-gray-400 py-10">
        <div className="flex flex-col gap-6 w-[230px]">
          <h3 className="font-semibold text-lg">About Starbucks</h3>
          <p>Our Company</p>
          <p>Stories and News</p>
          <p>Investor Relations</p>
          <p>Customer service</p>
        </div>
        <div className="flex flex-col gap-6 w-[230px]">
          <h3 className="font-semibold text-lg">Careers</h3>
          <p>Culture and Values</p>
          <p>Diversity and Inclusion</p>
          <p>Work at Starbucks</p>
          <p>Corporate Careers</p>
          <p>Retails Careers</p>
        </div>
        <div className="flex flex-col gap-6 w-[230px]">
          <h3 className="font-semibold text-lg">Social Impact</h3>
          <p>Overview</p>
          <p>People</p>
          <p>Planet</p>
          <p>Environmental and Social Impact Reporting</p>
        </div>
        <div className="flex flex-col gap-6 w-[230px]">
          <h3 className="font-semibold text-lg">For Business Partners</h3>
          <p>Corporate Gift Card Sales</p>
          <p>Branded Solutions</p>
        </div>
        <div className="flex flex-col gap-6 w-[230px]">
          <h3 className="font-semibold text-lg">Order and Pickup</h3>
          <p>Order on the App</p>
          <p>Order on the Web</p>
          <p>Delivery</p>
          <p>Order and Pickup Options</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-10 pb-32">
        <div className="flex gap-4">
          <div className="bg-black rounded-full p-1 hover:shadow-md hover:cursor-pointer hover:shadow-gray-700">
            <BiLogoFacebook className="h-6 w-6 text-white" />
          </div>
          <div className="bg-black rounded-full p-1 hover:shadow-md hover:cursor-pointer hover:shadow-gray-700">
            <FiInstagram className="h-6 w-6 text-white" />
          </div>
          <div className="bg-black rounded-full p-1 hover:shadow-md hover:cursor-pointer hover:shadow-gray-700">
            <BiLogoTwitter className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex gap-5 font-semibold">
          <p className="hover:underline cursor-pointer">Privacy Statement</p>
          <p>|</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p>|</p>
          <p className="hover:underline cursor-pointer">
            Do Not Share My Personal Information
          </p>
          <p>|</p>
          <p className="hover:underline cursor-pointer">Partners</p>
        </div>
        <h3 className="font-semibold text-sb-green cursor-pointer">
          Passer au site français
        </h3>
        <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </main>
  );
};

export default Footer;
