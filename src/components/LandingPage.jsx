import React from "react";
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

import GeminiForm from "./GeminiForm";
import Navbar from "./Navbar";
import Footer from "./Footer";


const LandingPage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div>
            {/* <Navbar/> */}
        <div className="font-sans">
            {/* Hero Section */}
            <section className="relative h-screen">
                <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
                    alt="University Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl font-bold mb-4">Welcome to SPIT</h1>
                        <p className="text-xl mb-8">Shaping the Leaders of Tomorrow</p>
                        <div className="space-y-2">
                            <p className="text-lg"><FaGraduationCap className="inline mr-2" />Ranked #1 in Student Satisfaction</p>
                            <p className="text-lg"><FaBriefcase className="inline mr-2" />95% Employment Rate</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeInUp}
                className="py-16 bg-gray-100"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg mb-4">
                            <strong>About Our Institute</strong>
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor, dicta nam libero a nobis adipisci iste voluptatibus dolores, autem nihil labore odio cumque nisi eveniet quaerat assumenda ipsam sit qui corporis! Cumque tempore adipisci unde tenetur eum odit accusantium quisquam sed ullam veniam, neque nesciunt, est repellat earum rerum!</p>
                        <p className="text-lg mb-4">
                            <strong>Our Mission:</strong> To empower students with knowledge, skills, and values that will enable them to make significant contributions to society and lead fulfilling lives.
                        </p>


                        <h2>Want to know more?  ask our bot!</h2>
                        <div className="w-full"> {/* Removed the 'flex' class to prevent horizontal alignment */}
        <GeminiForm /> {/* Add your form component here */}
    </div>
                        

                    </div>
                </div>
            </motion.section>

            {/* Placement Stats Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeInUp}
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Placement Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-blue-100 p-6 rounded-lg text-center">
                            <h3 className="text-2xl font-bold mb-2">95%</h3>
                            <p className="text-lg">Placement Rate</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg text-center">
                            <h3 className="text-2xl font-bold mb-2">15.14 LPA</h3>
                            <p className="text-lg">Average CTC</p>
                        </div>
                        <div className="bg-yellow-100 p-6 rounded-lg text-center">
                            <h3 className="text-2xl font-bold mb-2">200+</h3>
                            <p className="text-lg">Recruiting Companies</p>
                        </div>
                    </div>
                    <div className="mt-12">
  <h3 className="text-2xl font-bold text-center mb-4">Top Recruiters</h3>
  <div className="flex justify-center">
    <img
      src="companies.png" // Replace with the actual path to your image
      alt="Top Recruiters Logos"
      className="max-w-full h-auto rounded"
    />
  </div>
</div>

                </div>
            </motion.section>

            {/* Contact Details Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeInUp}
                className="py-16 bg-gray-800 text-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                            <ul className="space-y-2">
                                <li><FaMapMarkerAlt className="inline mr-2" />Sardar Patel Institute of Technology
Bhavan’s Campus, Munshi Nagar, Andheri (West), Mumbai 400 058</li>
                                <li><FaPhone className="inline mr-2" />College Landline Numbers : 69846900 /  69846927

Mobile Numbers: 9930362014 /  9930309463
</li>
                                <li><FaEnvelope className="inline mr-2" />info@ouruniversity.edu</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Campus Location</h3>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707549512!2d-73.98622908459375!3d40.74844097932756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635180846450!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="University Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
        {/* <Footer/> */}
        </div>
    );
};

export default LandingPage;