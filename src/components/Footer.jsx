import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const section = [
  {
    title: 'Solution',
    ele: ['Marketing', 'Analytics', 'Commerce', 'Data']
  },
  {
    title: 'Support',
    ele: ['Pricing', 'Documentation', 'Guides', 'API']
  },
  {
    title: 'Company',
    ele: ['About', 'Blog', 'Jobs', 'Press']
  },
];

const item = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://www.twitter.com/'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://www.github.com/'
  }
];

function Footer() {
  return (
    <>
      <div className="w-full mt-24 bg-blue-600 text-white py-8 px-2 transition duration-500 ease-in-out hover:bg-blue-700">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-base">
          {
            section.map((item, index) => (
              <div key={index}>
                <h6 className="font-bold uppercase pt-2">
                  {item.title}
                </h6>
                <ul>
                  {
                    item.ele.map((it, i) => {
                      return <li key={i} className="py-1 cursor-pointer transition duration-300 ease-in-out hover:text-gray-200">
                        {it}
                      </li>
                    })}
                </ul>
              </div>
            ))
          }
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">
              Subscribe to our newsletter
            </p>
            <p className="py-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input className="w-full p-2 mr-4 rounded-md mb-4 bg-base border border-white dark:border-black" type="email" placeholder="Email Address" />
              <button className="p-2 mb-4 bg-white text-sky-500 rounded-md transition duration-300 ease-in-out hover:bg-gray-200">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] px-2 py-2 mx-auto justify-between sm:flex-row text-center">
          <p className="py-4">
            2024 Made by Chai.pi. All rights reserved.
          </p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            {
              item.map((x, index) => {
                return <a href={x.link} key={index} className="text-white cursor-pointer transition duration-300 ease-in-out hover:text-gray-200">
                  <x.icon />
                </a>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
