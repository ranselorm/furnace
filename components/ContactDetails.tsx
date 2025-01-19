import { Icon } from "@iconify/react/dist/iconify.js";
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
        <p className="text-gray-600 mb-20 space-y-1">
          <span className="font-bold text-2xl text-black">Tema Branch</span>{" "}
          <br />
          <a className="text-black flex items-center gap-x-2">
            <Icon icon="mdi:location" className="text-secondary text-lg" />
            Community 6
          </a>
          <a className="text-black flex items-center gap-x-2">
            <Icon icon="ic:baseline-phone" className="text-secondary text-lg" />
            +233 244 537 072
          </a>
          <a
            className="text-black flex items-center gap-x-2"
            href="mailto:Caesarkofi@caesarfurnacegh.com"
          >
            <Icon
              icon="ic:baseline-email"
              className="text-secondary text-base"
            />
            caesarkofi@caesarfurnacegh.com
          </a>
        </p>
        <p className="text-gray-600 mb-6 space-y-1">
          <span className="font-bold text-2xl text-black">Kumasi Branch</span>{" "}
          <br />
          <a className="text-black flex items-center gap-x-2">
            <Icon icon="mdi:location" className="text-secondary text-lg" />
            Manhyia, near Ejisu, Kumasi
          </a>
          <a className="text-black flex items-center gap-x-2">
            <Icon icon="ic:baseline-phone" className="text-secondary text-lg" />
            +233 244 300 357
          </a>
          <a
            className="text-black flex items-center gap-x-2"
            href="mailto:novoplastmd@yahoo.co.uk"
          >
            <Icon
              icon="ic:baseline-email"
              className="text-secondary text-base"
            />
            novoplastmd@yahoo.co.uk
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
