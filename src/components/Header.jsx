import React from "react";

const Header = () => {
  // Function to scroll to the enquiry section
  const scrollToEnquirySection = () => {
    const enquirySection = document.getElementById("enquiry-section");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  return (
    <>
      {/* Background Gradient Circles */}
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[60%] text-white mb-10" style={{ marginTop:"130px", }}>
        {/* Title with Dancing Script for "FILMAATIC" and Montserrat for "STUDIOS" */}
        <h1 className="text-5xl font-semibold mb-4 text-center">
          <span className="font-dancing-script text-7xl" style={{ fontFamily: "SmileCandy", }}>Filmaatic</span>{" "}
          <span className="text-5xl  gradient-shimmer text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500">
          Productions
          </span>
        </h1>
        <p className="text-sm text-gray-300 font-montserrat text-center">
  Filmaatic Institute of Fashion And Cinema.
</p>

        {/* Enquire Now Button */}
        <button
          onClick={scrollToEnquirySection}
          className="relative overflow-hidden px-6 py-3 text-white text-lg font-medium rounded-lg transition-all duration-500 font-montserrat"
          style={{
            background: "linear-gradient(45deg,rgb(227, 180, 12), #69007f, #fc0987)",
            marginTop: "40px",
            borderRadius: "30px",
          }}
        >
          <span className="relative z-10">Enquire Now</span>
          <span
            className="absolute inset-1 bg-[#272727] rounded-lg transition-opacity duration-500 opacity-100 hover:opacity-70"
            style={{ zIndex: 1, borderRadius: "30px" }}
          ></span>
          <span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(45deg, #0ce39a, #69007f, #fc0987)",
              filter: "blur(20px)",
              zIndex: 0,
            }}
          ></span>
        </button>
      </div>
    </>
  );
};

export default Header;