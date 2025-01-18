import React from "react";

const ContactDetails: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center md:items-center mb-8">
      {/* Left map */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 h-[600px]">
        <img
          src="/images/contact.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Contact Details */}
      <div className="w-full md:w-1/2 p-12">
        <h2 className="section-title">Want to get in touch?</h2>
        <p className="text-2xl font-meduim text-black mb-6 mt-3">
          Our customer support team is here for you
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-bold text-2xl text-black">Phone</span> <br />
          <a href="tel:8884441212" className="text-black">
            (+233) 244 537 072
          </a>{" "}
          <br />
          <a href="tel:8884441212" className="text-black">
            (+233) 248 300357
          </a>
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-bold text-2xl text-black">Email:</span> <br />
          <a
            href="mailto:Caesarkofi@caesarfurnacegh.com"
            className="text-black"
          >
            caesarkofi@caesarfurnacegh.com
          </a>{" "}
          <br />
          <a href="mailto:novoplastmd@yahoo.co.uk" className="text-black">
            novoplastmd@yahoo.co.uk
          </a>
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-bold text-2xl text-black">Address</span> <br />
          <a className="text-black">Some Address in Accra, Ghana</a>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
