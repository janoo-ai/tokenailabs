"use client";
import React, { useEffect, useRef, useState } from "react";
import aboutlogo from "../../assets/about.png";
import { HiUsers } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import raheshsha from "../../assets/rajeshshaha.png";
import nihharshaha from "../../assets/nihharshaha.jpg";
import whoweare from "../../assets/whoweare.jpg";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import Footer from "../_components/Footer/Footer";

function Page() {
  const [whoarewe, setWhoarewe] = useState("introduction");
  const scrollwhoarewe = useRef(null);

  useEffect(() => {
    // Ensure the ref is defined before proceeding
    if (scrollwhoarewe.current) {
      const container = scrollwhoarewe.current;

      // Get the element to scroll to
      const element = document.getElementById(whoarewe);

      // If the element exists, scroll into view with smooth behavior
      if (element) {
        const elementTop = element.offsetTop - container.offsetTop;

        // Scroll the container to the position of the element
        container.scrollTo({ top: elementTop, behavior: "smooth" });
      }
    }
  }, [whoarewe]);

  return (
    <>
      <div
        className="flex flex-1 flex-grow flex-col h-fit"
        style={{
          background:
            "radial-gradient(circle, rgba(51 ,65 ,85,1 ) 1%, rgba(4, 47, 46, 1) 92%)",
        }}>
        <div className="w-full h-fit bg-trans-black pt-16 md:pt-20 lg:pt-16">
          <div className="flex-grow w-full   flex flex-col md:flex-row p-3 md:p-5 lg:p-10">
            <div className="w-full md:w-1/2 flex  bg-trans-black justify-center items-center   ">
              <Image
                src={aboutlogo}
                alt="about bot robot logo"
                className="w-full"
              />
            </div>
            <div className=" gap-3 poppins-regular w-full md:w-1/2  bg-trans-black p-3 md:p-5 lg:p-10 flex flex-col justify-center">
              <div className="font-semibold text-teal-400 relative before:content-[''] before:w-16 before:absolute before:top-1/2  before:left-0 before:transform before:-tranteal-y-1/2 before:h-1 before:bg-gradient-to-r before:from-fuchsia-600 before:to-pink-600 pl-20 ">
                About Us
              </div>
              <div className="text-4xl text-teal-300 font-bold">
                We Are Creating Modern & High Quality AI Chatbots For Your
                Application
              </div>
              <div className="text-teal-400 text-lg">
                There are many variations of passage available, but the majority
                have suffered alteration in some form, by injected humour, or
                randomised words which don&apos;t look even slightly believable
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-fit md:h-[80vh] p-0"
        style={{
          background:
            "radial-gradient(circle, rgba(4, 47, 46, 1) 2%, rgba(2 ,6, 23,1) 80%)",
        }}>
        <div className=" bg-trans-black  w-full h-full ">
          <div className="w-full gap-3 rounded-xl h-full bg-trans-black p-3 sm:p-5 md:p-10 flex flex-col justify-center items-center gap-2">
            <div className="mt-10 text-sm md:text-base font-semibold text-teal-400 relative before:content-[''] before:w-16 before:absolute before:top-1/2  before:left-0 before:transform before:-tranteal-y-1/2 before:h-1 before:bg-gradient-to-r before:from-fuchsia-600 before:to-pink-600 pl-20 ">
              How It Works
            </div>
            <div className=" text-2xl md:text-4xl text-teal-300 font-bold text-center">
              Elevate Your Craft With Our Suggestion
            </div>
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 mt-3 gap-5 mb-10">
              <div className="w-full h-full bg-gradient-to-r from-stone-800 to-stone-950 flex-col flex px-6 py-8 rounded-xl justify-evenly group transition-all duration-300">
                <div className="text-3xl text-white">
                  <HiUsers className="w-12 h-12 ml-2 transition-all duration-300 group-hover:text-fuchsia-500 group-hover:fill-current" />
                </div>
                <div>
                  <div className="text-xl  text-teal-300 font-semibold mt-2 group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-pink-500 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent ">
                    Human-like Intelligence
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mt-2 ">
                      Experience a system that mimics human cognitive abilities,
                      offering more intelligent responses and interactions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-full bg-gradient-to-r from-stone-800 to-stone-950 flex-col flex px-6 py-8 rounded-xl justify-evenly group transition-all duration-300 ">
                <div className="text-3xl text-white">
                  <IoLanguage className="w-12 h-12 ml-2 transition-all duration-300 group-hover:text-fuchsia-500 group-hover:fill-current" />
                </div>
                <div>
                  <div className="text-xl  text-teal-300 font-semibold mt-2 group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-pink-500 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent ">
                    Natural Language Processing
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mt-2">
                      Communicate seamlessly with advanced natural language
                      understanding, designed for real-world conversations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full bg-gradient-to-r from-stone-800 to-stone-950 flex-col flex px-6 py-8 rounded-xl justify-evenly group transition-all duration-300">
                <div className="text-3xl text-white">
                  <IoIosSettings className="w-12 h-12 ml-2 transition-all duration-300 group-hover:text-fuchsia-500 group-hover:fill-current" />
                </div>
                <div>
                  <div className="text-xl  text-teal-300 font-semibold mt-2 group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-pink-500 transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent ">
                    Customizable Knowledge-Based Chatbot
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mt-2">
                      Tailor the chatbot to your specific needs, ensuring it can
                      handle domain-specific queries with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-fit  p-0 "
        style={{
          background:
            "radial-gradient(circle, rgba(4, 47, 46, 1) 10%, rgba(2 ,6, 23,1) 90%)",
        }}>
        <div className=" bg-trans-black  w-full h-fit flex justify-center items-center ">
          <div className="w-full h-full p-3 sm:p-5 md:px-10 ">
            <div className=" w-full gap-3 rounded-xl h-full p-3 sm:p-5 md:p-10 flex flex-col justify-center items-center gap-2">
              <div className="mt-10 text-sm md:text-base font-semibold text-teal-400 relative before:content-[''] before:w-16 before:absolute before:top-1/2  before:left-0 before:transform before:-tranteal-y-1/2 before:h-1 before:bg-gradient-to-r before:from-fuchsia-600 before:to-pink-600 pl-20 ">
                Meet our Team
              </div>
              <div className=" text-2xl md:text-4xl text-teal-300 font-bold text-center">
                Experts Behind Our Success
              </div>
              <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 mb-12">
                <div className=" hover:invert  group w-full flex flex-col bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Meet Our Founder
                  </h3>

                  <div className="w-full h-fit flex justify-between ">
                    <div className="w-full h-fit">
                      <p className="text-gray-600 mb-4 poppins-regular">
                        Rajesh Shaha has over 35 years of experience in industry
                        leadership and innovation, steering the company toward
                        growth and success.
                      </p>
                      <span className="text-gray-500 italic ">
                        Meet Rajesh Shah
                      </span>
                    </div>
                    <Image
                      src={raheshsha}
                      alt="shahaimage"
                      className="w-40 h-40 rounded-full mb-4 object-cover shadow-lg group-hover:invert"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col hover:invert group bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Meet Our Co-Founder
                  </h3>
                  <div className="w-full h-fit flex justify-between items-start">
                    <div className="w-full h-fit">
                      <p className="text-gray-600 mb-4 poppins-regular">
                        Nihhar Shaha is a visionary who co-founded the company,
                        bringing innovation and passion to every aspect of the
                        business.
                      </p>
                      <span className="text-gray-500 italic">
                        Meet Nihaar Shah
                      </span>
                    </div>

                    <Image
                      src={nihharshaha}
                      alt="shahaimage"
                      className="w-40 h-40 rounded-full mb-4 object-cover shadow-lg group-hover:invert  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-fit  p-0 "
          style={{
            background:
              "radial-gradient(circle, rgba(4, 47, 46, 1) 10%, rgba(2 ,6, 23,1) 90%)",
          }}>
          <div className=" bg-trans-black  w-full h-full flex flex-col md:flex-row justify-center items-center ">
            <div className="w-full gap-3 rounded-xl h-full p-3 sm:p-5 md:p-10 flex flex-col justify-center items-center gap-2">
              <div className="mt-10 text-sm md:text-base font-semibold text-teal-400 relative before:content-[''] before:w-16 before:absolute before:top-1/2  before:left-0 before:transform before:-tranteal-y-1/2 before:h-1 before:bg-gradient-to-r before:from-fuchsia-600 before:to-pink-600 pl-20 ">
                Who we are and what we offer
              </div>
              <div className="w-full p-3 sm:p-5 md:px-10 h-full flex flex-col md:flex-row justify-center items-center bg-white rounded ">
                <div className="w-full h-[60vh] relative ">
                  <div
                    ref={scrollwhoarewe}
                    className="w-full h-full overflow-y-auto scroll-hidden ">
                    <p id="introduction" className="poppins-regular text-base ">
                      <heading className="font-bold text-2xl">
                        Introduction
                      </heading>
                      <br />
                      <br />
                      In the digital age, the way businesses communicate with
                      their customers has transformed dramatically. At Life
                      Force Molecules pvt. ltd., we stand at the forefront of
                      this transformation, harnessing the power of Artificial
                      Intelligence (AI) to create intelligent chatbot solutions
                      that redefine customer interaction. Our commitment to
                      innovation, quality, and customer satisfaction has
                      positioned us as leaders in the AI chatbot services
                      industry.
                      <br />
                      <br />
                      Founded in 2024, Life Force Molecules pvt. ltd. was born
                      out of a desire to improve how businesses connect with
                      their customers. We recognized the growing demand for
                      instant, efficient communication solutions and set out to
                      develop cutting-edge AI technologies that would not only
                      meet but exceed those expectations. Today, we are proud to
                      be a trusted partner for companies seeking to enhance
                      their customer engagement strategies through intelligent
                      chatbot solutions
                    </p>
                    <br />
                    <br />
                    <p id="ourmission" className="poppins-regular text-base ">
                      <heading className="font-bold text-2xl">
                        Our Mission
                      </heading>
                      <br />
                      <br />
                      At Life Force Molecules pvt. ltd, our mission is to
                      empower businesses with AI-driven chatbot technology that
                      simplifies and enhances customer interactions. We believe
                      that effective communication is the cornerstone of
                      successful relationships, and our chatbots are designed to
                      facilitate this in a seamless and efficient manner. Our
                      goal is to provide businesses with tools that enable them
                      to deliver exceptional customer service, streamline
                      operations, and drive growth.
                      <br />
                      <br />
                      We are committed to continuous innovation, ensuring that
                      our chatbot solutions evolve alongside the needs of our
                      clients. Our team works tirelessly to stay ahead of
                      industry trends, incorporating the latest advancements in
                      AI and machine learning to deliver state-of-the-art
                      solutions that meet the dynamic demands of the
                      marketplace.
                    </p>
                    <br />
                    <br />
                    <p
                      id="ourvision"
                      className="poppins-regular text-base mb-40 ">
                      <heading className="font-bold text-2xl">
                        Our Vision
                      </heading>
                      <br />
                      <br />
                      Looking ahead, we envision a future where every business
                      can leverage the power of AI to enhance customer
                      engagement and drive success. Our vision is to be the
                      leading provider of AI chatbot solutions globally,
                      recognized for our commitment to excellence, innovation,
                      and customer-centricity.
                      <br />
                      <br />
                      We strive to make AI accessible to businesses of all
                      sizes, enabling them to compete in a rapidly changing
                      digital landscape. By democratizing access to intelligent
                      chatbot technology, we aim to empower businesses to
                      connect with their customers in meaningful ways, fostering
                      loyalty and satisfaction.
                    </p>
                    <p
                      id="ourservices"
                      className="poppins-regular text-base mb-40 ">
                      <heading className="font-bold text-2xl">
                        Our Services
                      </heading>
                      <br />
                      <br />
                      At Life Force Molecules pvt. ltd, we offer a comprehensive
                      suite of AI-driven chatbot services tailored to meet the
                      unique needs of our clients. Our offerings include:
                      <br />
                      <br />
                      <strong>Customer Service Automation:</strong> Our chatbots
                      are equipped to handle a wide range of customer inquiries,
                      providing instant support and reducing wait times. By
                      automating routine tasks, businesses can free up their
                      human agents to focus on more complex issues, ultimately
                      enhancing the overall customer experience.
                      <br />
                      <br />
                      <strong>Personalization and User Engagement:</strong> We
                      understand that every customer is unique. Our chatbots
                      leverage advanced algorithms to deliver personalized
                      experiences based on user preferences and behavior. This
                      level of customization not only enhances user satisfaction
                      but also fosters deeper connections between businesses and
                      their customers.
                    </p>
                    <p
                      id="ourteam"
                      className="poppins-regular text-base mb-40 ">
                      <heading className="font-bold text-2xl">Our Team</heading>
                      <br />
                      <br />
                      At Life Force Molecules pvt. ltd, our strength lies in our
                      talented and diverse team of professionals. Our experts
                      bring a wealth of experience in AI, machine learning,
                      software development, and customer service. Together, we
                      are united by a shared passion for innovation and a
                      commitment to delivering exceptional solutions for our
                      clients.
                      <br />
                      <br />
                      Our team members are not only skilled in their respective
                      fields but also deeply understand the needs of businesses
                      and consumers. This combination of expertise and empathy
                      enables us to create chatbot solutions that truly resonate
                      with users.
                    </p>
                  </div>
                  <div className="absolute -bottom-5 flex justify-center items-center  pt-3 w-full bg-[rgba(255,255,255,0.9)]">
                    <div
                      onClick={() => {
                        whoarewe === "introduction"
                          ? setWhoarewe("ourmission")
                          : whoarewe === "ourmission"
                          ? setWhoarewe("ourvision")
                          : whoarewe === "ourvision"
                          ? setWhoarewe("ourservices")
                          : whoarewe === "ourservices"
                          ? setWhoarewe("ourteam")
                          : setWhoarewe("introduction");
                      }}
                      className={`w-fit h-fit cursor-pointer p-2 rounded-full border transforme ease dalay-300  border-4 border-solid  border-black shadow-mdlight hover:shadow-mdlight1 ${
                        whoarewe !== "ourteam"
                          ? "hover:tranteal-y-3"
                          : "hover:-tranteal-y-3"
                      }`}>
                      <FaArrowDown
                        className={`w-6 h-6 md:w-10 md:h-10 ${
                          whoarewe === "ourteam" && "rotate-180"
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full ">
                  <Image src={whoweare} alt="who we are" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2 bg-black"></div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Page;
