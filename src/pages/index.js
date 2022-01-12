import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import TestImage1 from 'src/images/test-image-1.jpg';
import TestImage2 from 'src/images/test-image-2.jpg';
import TestImage3 from 'src/images/test-image-3.jpg';
import FarmProduct1 from 'src/images/farm-product-1.jpg';
import FarmProduct2 from 'src/images/farm-product-2.jpg';
import FarmImage from 'src/images/simplicity-farms.jpg';
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
          <div className="text-2xl font-black uppercase md:text-5xl text-primary">
            <span className="">Family-owned and operated</span>
          </div>
          <div className="mt-4 text-xl">
            Founded in 2022, Sweet Feather Farms provides high-quality
            sustainable honey, goats milk and eggs for the market.
          </div>
          <div className="h-16 my-5 mt-10">
            <Link
              to="/our-story"
              className="w-48 px-4 py-2 text-lg font-medium text-center text-yellow-100 bg-green-500 rounded shadow-md cursor-pointer hover:no-underline hover:bg-green-600"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
          <div className="bg-dots">
            <div className="z-10 max-w-md mt-6 ml-4 rounded-full shadow-2xl">
              <img alt="card img" className="rounded-t" src={FarmImage}></img>
              <div className="p-10 text-2xl bg-white">
                <img
                  alt="quote"
                  className="float-left mr-1"
                  src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                ></img>{' '}
                From farm to fork, we harvest all our products with love.
                <p className="mt-4 text-sm">- Jesse Lay, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Farm Section */}
      <div className="container pt-2 pb-6 mx-auto border-b-2">
        <h1 className="py-4 text-center font-slim text-primary">Our Farm</h1>
        <div className="flex justify-center px-6 my-4">
          <div className="w-60 md:w-full md:flex-row sm:flex-col">
            <div className="flex w-full p-4 mr-2 bg-white rounded shadow-xl md:h-auto sm:h-40">
              <img
                className="w-full h-auto bg-gray-400 bg-cover rounded"
                src={FarmImage}
                alt=""
              ></img>
            </div>
            <div className="w-full p-5 bg-white">
              <div className="mb-4 text-center sm:px-8">
                <h3 className="pt-4 mb-2 text-2xl">Farm Name Here</h3>
                <p className="mb-4 text-sm text-gray-700">
                  Description of the farm location and little backstory, what
                  the farm does and grows etc.
                </p>
              </div>
              <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="./index.html"
                  >
                    Find Us On Google Maps!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Products Section */}
      <div className="container pt-2 pb-6 mx-auto mt-2 border-b-4 sm:block">
        <h1 className="py-4 text-center font-slim text-brown">Our Products</h1>
        <div className="flex flex-wrap justify-center px-6 my-4 md:flex-row sm:w-auto">
          {/* Products Here*/}
          <div className="product sm:max-w-sm">
            <img
              className="w-full"
              src={FarmProduct2}
              alt="Plate of rice"
            ></img>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                Simplicity Farms Original Rice
              </div>
              <p className="mb-4 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button className="flex px-4 py-2 mb-3 ml-6 text-sm font-bold text-white rounded shadow-sm sm:text-base bg-orange hover:bg-orange-dark">
              Buy With Stripe
              <img className="w-6 ml-3 shadow-sm" src={StripeImage1}></img>
            </button>
            <div className="flex flex-col px-6 py-4 sm:flex-row">
              <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-primary sm:mb-0">
                $1,250
              </span>
              <span className="w-20 mr-2 text-white sm:w-auto prd-tag bg-brown-light">
                25KG
              </span>
              <span className="hidden mr-2 text-gray-600 bg-gray-100 md:block prd-tag">
                #organic
              </span>
              <span className="hidden text-gray-600 bg-gray-100 md:block prd-tag">
                #farming
              </span>
            </div>
          </div>
          <div className="product sm:max-w-sm">
            <img
              className="w-full"
              src={FarmProduct2}
              alt="Plate of rice"
            ></img>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                Simplicity Farms Original Rice
              </div>
              <p className="mb-4 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button className="flex px-4 py-2 mb-3 ml-6 text-sm font-bold text-white rounded shadow-sm sm:text-base bg-orange hover:bg-orange-dark">
              Buy With Stripe
              <img className="w-6 ml-3 shadow-sm" src={StripeImage1}></img>
            </button>
            <div className="flex flex-col px-6 py-4 sm:flex-row">
              <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-primary sm:mb-0">
                $2,500
              </span>
              <span className="w-20 mr-2 text-white sm:w-auto prd-tag bg-brown-light">
                50KG
              </span>
              <span className="hidden mr-2 text-gray-600 bg-gray-100 md:block prd-tag">
                #organic
              </span>
              <span className="hidden text-gray-600 bg-gray-100 md:block prd-tag">
                #farming
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
