import React from "react";

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

      <div className="flex py-10">

      </div>
    </main>
  );
};

export default Footer;
