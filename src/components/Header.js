import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import logo from '../images/logo-invert.png';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="sticky top-0 w-full mt-0 bg-yellow-200 shadow-2xl">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="">
          <div className="no-underline opacity-100 hover:text-white hover:no-underline">
            <span className="pl-2 text-2xl italic font-bold text-green-700">
              {/* <img
                alt="Simplicity Farms"
                className="inline w-12 h-12"
                src={logo}
              /> */}
              Sweet Feather Farms
              {/* {siteTitle} */}
            </span>
          </div>
        </Link>
        <div
          className={`${
            isExpanded ? `hidden` : `hidden`
          } sm:hidden md:hidden lg:block text-lg`}
        >
          {[
            {
              route: '/',
              title: 'Home',
            },
            // {
            //   route: `/contact`,
            //   title: `Contact Us`,
            // },
            // {
            //   route: `/our-team`,
            //   title: `Our Team`,
            // },
            // {
            //   route: `/our-farm`,
            //   title: `The Farm`,
            // },
            // {
            //   route: `/our-blog`,
            //   title: `Blog`,
            // },
            // {
            //   route: `/our-products`,
            //   title: `Products`,
            // },
          ].map((link) => (
            <Link
              className="block mt-4 font-medium hover:text-secondary text-slim text-primary hover:no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="block lg:hidden">
          {/* beginning of hamburger */}
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-secondary hover:border-secondary"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Hamburger Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          {/* beginning of small navbar */}
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } lg:hidden text-lg relative float-right inline-block text-left`}
          >
            <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
              <div className="bg-white rounded-md shadow-xs">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {[
                    {
                      route: '/',
                      title: 'Home',
                    },
                    // {
                    //   route: `/contact`,
                    //   title: `Contact Us`,
                    // },
                    // {
                    //   route: `/our-team`,
                    //   title: `Our Team`,
                    // },
                    // {
                    //   route: `/our-farm`,
                    //   title: `The Farm`,
                    // },
                    // {
                    //   route: `/our-blog`,
                    //   title: `Blog`,
                    // },
                    // {
                    //   route: `/our-products`,
                    //   title: `Products`,
                    // },
                  ].map((link) => (
                    <Link
                      className="block px-4 py-2 font-light leading-1 hover:text-secondary text-slim text-primary hover:text-black focus:bg-gray-100 focus:text-secondary hover:no-underline"
                      key={link.title}
                      to={link.route}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
