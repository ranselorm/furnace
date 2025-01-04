import Link from "next/link";
import React from "react";

const GetSupport: React.FC = () => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/support.jpg" // Replace with the actual image path
            alt="Get Support"
            className=""
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="section-title">GET SUPPORT</h2>
          <p className="text-sub mt-4">Find Installation Assistance</p>
          <p className="text-gray-600 mt-4">
            Our warranties are contingent on installation by a qualified
            installer (contractor). For service or installation questions,
            please visit our support guide for assistance.
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
