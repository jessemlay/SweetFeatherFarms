import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import TestImage1 from 'src/images/test-image-1.jpg';
import TestImage2 from 'src/images/test-image-2.jpg';
import TestImage3 from 'src/images/test-image-3.jpg';
import FarmProduct1 from 'src/images/farm-product-1.jpg';
import FarmProduct2 from 'src/images/farm-product-2.jpg';
import FarmImage from 'src/images/sff.jpg';
import ollieChickens from 'src/images/ollie.jpg';
import underConstruction from 'src/images/construction.png';
import StripeImage1 from 'src/images/logo-stripe.png';
import GastbyIcon from 'src/images/gatsby-icon.png';
import TailwindIcon from 'src/images/tailwind.png';
import SEO from 'src/components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="max-w-6xl p-2 mt-4 sm:m-auto sm:p-12">
      <div className="flex flex-col pb-10 border-b-2 md:flex-row">
        <div className="flex flex-col justify-center max-w-md md:w-1/2">
          <div className="text-2xl font-black uppercase md:text-2xl text-primary text-center">
            <span className="text-center">Please check back soon</span>
          </div>
          <div className="mt-4 text-xl">
            {/* Founded in 2022, Sweet Feather Farms provides high-quality
            sustainable honey, goats milk and eggs for the market. */}

            <div className="text-center text-2xl font-black uppercase md:text-2xl text-primary">
              {' '}
              Our Farm is currently ramping up for production.
            </div>
          </div>
          <div className="h-16 my-5 mt-10">
            {/* <Link
              to="/our-story"
              className="w-48 px-4 py-2 text-lg font-medium text-center text-yellow-100 bg-green-500 rounded shadow-md cursor-pointer hover:no-underline hover:bg-green-600"
            >
              Learn Our Story
            </Link> */}
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
          <div className="bg-dots">
            <div className="z-10 max-w-md mt-6 ml-4">
              <img
                alt="card img"
                className="rounded-t"
                src={ollieChickens}
              ></img>
              <div className="p-10 text-2xl bg-white">
                {/* <img
                  alt="quote"
                  className="float-left mr-1"
                  src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                ></img>{' '}
                From farm to fork, we harvest all our products with love.
                <p className="mt-4 text-sm">- Jesse Lay, Founder</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Farm Section */}
      <div className="container pt-2 pb-6 mx-auto border-b-2">
        {/* <h1 className="py-4 text-center font-slim text-primary">Our Farm</h1> */}
        <div className="flex justify-center px-6 my-4">
          <div className="w-60 md:w-full md:flex-row sm:flex-col">
            <div className="flex w-full p-4 mr-2 ">
              <img
                className="w-full h-auto"
                src={underConstruction}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Our Products Section */}
    </div>
  </Layout>
);

export default IndexPage;
