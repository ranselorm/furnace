import Link from "next/link";
import React from "react";

const GetSupport: React.FC = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img src="/images/ksi.jpg" alt="Get Support" className="" />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="section-title">GET SUPPORT</h2>
          <p className="text-sub mt-4">Find Installation Assistance</p>
          <p className="text-gray-600 mt-4">
            Caesar Furnace offers support and installation help to ensure your
            equipment works perfectly. Our warranties require installation by
            qualified professionals. For any service or installation questions,
            our team is here to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 text text-white font-bold bg-secondary"
          >
            FIND ASSISTANCE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetSupport;
