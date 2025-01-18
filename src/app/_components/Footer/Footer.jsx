import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { FaBattleNet } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";

const socialIcons = [
  {
    href: "https://www.facebook.com/profile.php?id=61571779847588",
    icon: <FaFacebookSquare className="w-6 h-6 fill-blue-400" />,
    name: "Facebook",
  },
  {
    href: "https://x.com/tokenailabs",
    icon: <FaXTwitter className="w-6 h-6" />,
    name: "Twitter",
  },
  {
    href: "https://youtube.com/@tokenailabs?si=mTOEcULdnVFexlnM",
    icon: <FaYoutube className="w-6 h-6 fill-red-700" />,
    name: "Youtube",
  },
  // Add more social icons as needed
];

function Footer() {
  return (
    <div className="w-screen h-fit   text-slate-50 relative  bg-gradient-to-b from-[#002147] to-black">
      <div className="footerimg  bg-cover w-full h-fit p-3 md:p-10 md:px-20 ">
        <div className="w-full flex flex-col md:flex-row justify-between z-20">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 justify-center w-fit h-fit ">
              <Image
                height={200}
                width={200}
                src="/logo.png"
                className="bg-[rgba(255,255,255,0.9)] p-2 rounded-xl hover:invert"
              />
              <h4 className="text-xl poppins-bold tracking-widest">
                Token AI Labs Pvt. Ltd.
              </h4>
            </div>
            <div className="w-fill h-0.5 bg-slate-50 rounded"></div>
            <div className="flex flex-col justify-center gap-3">
              <div>Follow Us</div>
              <div className="flex gap-3  ">
                {socialIcons.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="hover:text-gray-400 p-2 rounded-lg border border-1 border-solid border-slate-400  hover:invert hover:scale-110"
                    aria-label={item.name}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-20 max-w-full tracking-wide mt-5 md:mt-0 justify-end">
            <ul className="list-none p-0 flex gap-5 md:gap-10	">
              <li className="mb-2">
                <label className="font-semibold">QUICK LINKS</label>
                <ul className=" list-none	 flex flex-col gap-1 mt-5	 poppins-light-italic">
                  <li className="hover:underline ">
                    <Link href="/" className="flex gap-2 items-center">
                      <FaHome className="w-4 h-4" />
                      Home
                    </Link>
                  </li>
                  <li className="hover:underline ">
                    <Link href="/about" className="flex gap-2 items-center">
                      <TbInfoSquareRounded className="w-4 h-4" />
                      About Us
                    </Link>
                  </li>
                  <li className="hover:underline ">
                    <Link href="/contactus" className="flex gap-2 items-center">
                      <MdPermContactCalendar className="w-4 h-4" />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <label className="font-semibold">PRODUCTS</label>
                <ul className=" list-none	flex flex-col	gap-3 mt-5 poppins-light-italic">
                  <li className="hover:underline ">
                    <a
                      href="https://jaano.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2">
                      <FaBattleNet className="w-5 h-5" />
                      Jaano.ai
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm hover:text-gray-300 duration-200	 ease-in">
          &copy; {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            Token Ai Labs Pvt. Ltd.
          </a>{" "}
          All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
