import React from "react";

const TheCesarWay: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="section-title">THE CESAR WAY</h2>
          <p className="text-lg text-gray-600 mt-4">
            Leading The Future Of HVAC Solutions
          </p>
          <p className="text-gray-600 mt-6 leading-loose">
            Jesse Williams understood that his company had to adapt to grow—and
            so do we. Today, we use numerically controlled machinery to ensure
            both precision and quality. All of our products are tested to the
            highest standards set by the National Bureau of Standards. We
            perform all engineering, R&D, testing, and manufacturing at our
            factory in Colton, California.
          </p>
          <p className="text-gray-600 mt-4 leading-loose">
            Above all, we&apos;re dedicated to treating our customers with
            respect and integrity. Over the years, our customers have come to
            expect the same quality from us as our industry-leading products.
          </p>
        </div>

        {/* Image Collage */}
        <div className="w-1/2 gap-4 h-[500px] flex justify-center">
          <img
            src="https://images.pexels.com/photos/19781878/pexels-photo-19781878/free-photo-of-close-up-of-flame-in-a-crucible.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Us"
            className="h-full w-full object-cover md:w-[85%]"
          />
        </div>
      </div>
    </section>
  );
};

export default TheCesarWay;
