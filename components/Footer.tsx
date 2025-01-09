const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Us */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 bg-yellow-500"></div>
            <h3 className="text-lg font-bold uppercase">About Us</h3>
          </div>
          <p className="text-gray-400 mt-4">
            We are a leading construction company dedicated to providing
            high-quality services and innovative solutions. Our commitment to
            excellence ensures that every project is completed to the highest
            standards.
          </p>
        </div>

        {/* Working Hours */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 bg-yellow-500"></div>
            <h3 className="text-lg font-bold uppercase">Working Hours</h3>
          </div>
          <p className="text-gray-400 mt-4">
            We work 6 days a week, excluding major holidays. Contact us if you
            have an emergency, with our Hotline and Contact form.
          </p>
          <ul className="text-gray-400 mt-4">
            <li className="flex justify-between">
              <span>Monday - Friday:</span>
              <span>7:00 - 17:00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span>8:00 - 15:00</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 bg-yellow-500"></div>
            <h3 className="text-lg font-bold uppercase">Services</h3>
          </div>
          <ul className="text-gray-400 mt-4">
            <li className="mt-2">› Home Construction</li>
            <li className="mt-2">› Interior Design</li>
            <li className="mt-2">› Building Remodels</li>
            <li className="mt-2">› Exterior Design</li>
            <li className="mt-2">› Renovation</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
