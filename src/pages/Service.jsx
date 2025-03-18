import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaTheaterMasks, FaFilm, FaDumbbell, FaMicrophone, FaTv, FaAd } from 'react-icons/fa';
import EnquirySection from '../components/Enquiry'; // Correct import path

const Service = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] animate-float"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Academy</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At Filmaatic Studio, we offer best-in-class training and services in acting, dance, and screen casting. Whether you're a beginner or a seasoned professional, we have something for everyone.
          </p>
        </section>

        {/* Acting School Card */}
        <section className="mb-16 animate-fade-in-up">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={500}
            className="rounded-[25px] p-8 border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-8">
              Acting School
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaTheaterMasks className="text-4xl text-pink-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Beginner Workshops</h3>
                </div>
                <p className="text-gray-300">
                  Perfect for newcomers, our beginner workshops introduce you to the fundamentals of acting, including voice modulation, body language, and character development.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaFilm className="text-4xl text-purple-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Advanced Masterclasses</h3>
                </div>
                <p className="text-gray-300">
                  For experienced actors, our advanced masterclasses focus on refining techniques, exploring complex characters, and preparing for auditions.
                </p>
              </div>
            </div>
          </Tilt>
        </section>

        {/* Dance Studio Card */}
        <section className="mb-16 animate-fade-in-up">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={500}
            className="rounded-[25px] p-8 border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-8">
              Dance Studio
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaDumbbell className="text-4xl text-pink-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Contemporary Dance</h3>
                </div>
                <p className="text-gray-300">
                  Explore the fluidity and expression of contemporary dance with our expert instructors. Suitable for all skill levels.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaMicrophone className="text-4xl text-purple-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Hip-Hop & Street Dance</h3>
                </div>
                <p className="text-gray-300">
                  Learn the latest moves and techniques in hip-hop and street dance. High-energy classes designed to get you moving!
                </p>
              </div>
            </div>
          </Tilt>
        </section>

        {/* Screen Casting Card */}
        <section className="mb-16 animate-fade-in-up">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={500}
            className="rounded-[25px] p-8 border border-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-8">
              Screen Casting
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaTv className="text-4xl text-pink-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Film & TV Casting</h3>
                </div>
                <p className="text-gray-300">
                  We connect talented actors with casting directors for film and television projects. Our team helps you prepare for auditions and land your dream role.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaAd className="text-4xl text-purple-500 mr-4" />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Commercial Casting</h3>
                </div>
                <p className="text-gray-300">
                  From TV commercials to online ads, we help actors find opportunities in the commercial space. Perfect for building your portfolio.
                </p>
              </div>
            </div>
          </Tilt>
        </section>
      </div>

      {/* Enquiry Section */}
      <EnquirySection />
    </div>
  );
};

export default Service;