import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import logo from '../../assets/Logo.webp';
import { NavLink } from 'react-router-dom';
const RootLayout = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeHandler = () => {
    navigate('/');
    console.log('clicked');
  };
  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition duration-300 ${
          scroll ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div
              className="flex flex-shrink-0 cursor-pointer items-center"
              onClick={homeHandler}
            >
              <img className="h-16 w-[150px]" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/blog"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Blog
                </NavLink>

                <NavLink
                  to="/venues"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Venues
                </NavLink>

                <NavLink
                  to="/vendors"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Vendors
                </NavLink>
                <NavLink
                  href="#f"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />

      <footer id="#f" className="   bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="sm:col-span-2 md:col-span-1">
              <h2 className="mb-4 text-xl font-bold">About Us</h2>
              <p className="mb-4 text-sm">
                We are a wedding planning and booking platform that helps
                couples to plan and organize their dream wedding hassle-free.
                Our team of experienced wedding planners and vendors provide a
                wide range of services to make your big day special and
                memorable.
              </p>
              <p className="mb-4 text-sm">
                We have a network of over 20,000 wedding venues and vendors
                across 25+ cities in India, and have organized over 10,000
                successful weddings till date.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold">Our Services</h2>
              <ul className="mb-4 list-none text-sm">
                <li className="mb-2">
                  <a href="#">Wedding Planning</a>
                </li>
                <li className="mb-2">
                  <a href="#">Venue Booking</a>
                </li>
                <li className="mb-2">
                  <a href="#">Catering</a>
                </li>
                <li className="mb-2">
                  <a href="#">Photography</a>
                </li>
                <li className="mb-2">
                  <a href="#">Decorations</a>
                </li>
                <li className="mb-2">
                  <a href="#">Transportation</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
              <p className="mb-4 text-sm">Phone: +91 1234567890</p>
              <p className="mb-4 text-sm">Email: info@marriage.com</p>
              <p className="mb-4 text-sm">
                Address: 123 Main Street, Bangalore, India
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center border-t border-gray-800 pt-8">
            <p className="text-sm">
              &copy; 2023 Marriage.com. All rights reserved.
            </p>
            <div className="mt-4 flex items-center">
              <a href="#" className="mx-2">
                <i className="fab fa-facebook-f text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-twitter text-gray-400 hover:text-white"></i>
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-instagram text-gray-400 hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
