// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Add scroll event listener
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Add/remove blur effect on page content when dropdown is open/closed
//   useEffect(() => {
//     const pageContent = document.getElementById("page-content");
//     if (isOpen) {
//       pageContent.classList.add("blur-effect");
//     } else {
//       pageContent.classList.remove("blur-effect");
//     }

//     return () => {
//       pageContent.classList.remove("blur-effect");
//     };
//   }, [isOpen]);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? "backdrop-blur-md bg-slate-950/50" : "bg-transparent"
//       }`}
//     >
//       {/* Navbar Content */}
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl text-white hover:text-gray-200 transition-colors duration-300">
//           Filmaatic
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="text-white hover:text-gray-200 transition-colors duration-300">
//             Home
//           </Link>
//           <Link to="/about" className="text-white hover:text-gray-200 transition-colors duration-300">
//             About
//           </Link>
//           <Link to="/service" className="text-white hover:text-gray-200 transition-colors duration-300">
//             Academy
//           </Link>
//           <Link to="mailto:hrlifeplanner@gmail.com" className="text-white hover:text-gray-200 transition-colors duration-300">
//             Support
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white hover:text-gray-200 transition-colors duration-300" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu - Conditionally Rendered */}
//       {isOpen && (
//         <div
//           className={`md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] z-[1000] rounded-[25px] transition-all duration-300 ease-out backdrop-blur-lg text-center`}
//         >
//           <Link
//             to="/"
//             className="block py-3 px-4 text-white hover:bg-gray-800/50 transition-colors duration-300 rounded-[25px]"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block py-3 px-4 text-white hover:bg-gray-800/50 transition-colors duration-300 rounded-[25px]"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             to="/service"
//             className="block py-3 px-4 text-white hover:bg-gray-800/50 transition-colors duration-300 rounded-[25px]"
//             onClick={() => setIsOpen(false)}
//           >
//             Academy
//           </Link>
//           <Link
//             to="mailto:hrlifeplanner@gmail.com"
//             className="block py-3 px-4 text-white hover:bg-gray-800/50 transition-colors duration-300 rounded-[25px]"
//             onClick={() => setIsOpen(false)}
//           >
//             Support
//           </Link>
//         </div>
//       )}

//       {/* Dark Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-[999]"
//           onClick={() => setIsOpen(false)} // Close dropdown when overlay is clicked
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add/remove blur effect on page content when dropdown is open/closed
  useEffect(() => {
    const pageContent = document.getElementById("page-content");
    if (isOpen) {
      pageContent.classList.add("blur-effect");
    } else {
      pageContent.classList.remove("blur-effect");
    }

    return () => {
      pageContent.classList.remove("blur-effect");
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-slate-950/50" : "bg-transparent"
      }`}
    >
      {/* Navbar Content */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl text-white hover:text-gray-200 transition-colors duration-300">
          Filmaatic
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200 transition-colors duration-300">
            About
          </Link>
          <Link to="/service" className="text-white hover:text-gray-200 transition-colors duration-300">
            Academy
          </Link>
          <Link to="mailto:hrlifeplanner@gmail.com" className="text-white hover:text-gray-200 transition-colors duration-300">
            Support
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gray-200 transition-colors duration-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Conditionally Rendered */}
      {isOpen && (
        <div
          className={`md:hidden ${
            isScrolled ? "bg-black" : "bg-black/80 backdrop-blur-2xl"
          } rounded-[25px] shadow-lg absolute w-[90%] z-[1000] top-20 left-1/2 transform -translate-x-1/2 border border-gray-800 transition-all duration-300 ease-out py-3`}
        >
          <Link
            to="/"
            className="block py-3 px-4 text-white hover:bg-gray-800 transition-colors duration-300 rounded-[25px] ml-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-3 px-4 text-white hover:bg-gray-800 transition-colors duration-300 rounded-[25px] ml-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/service"
            className="block py-3 px-4 text-white hover:bg-gray-800 transition-colors duration-300 rounded-[25px] ml-2"
            onClick={() => setIsOpen(false)}
          >
            Academy
          </Link>
          <Link
            to="mailto:hrlifeplanner@gmail.com"
            className="block py-3 px-4 text-white hover:bg-gray-800 transition-colors duration-300 rounded-[25px] ml-2"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
        </div>
      )}

      {/* Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)} // Close dropdown when overlay is clicked
        ></div>
      )}
    </nav>
  );
};

export default Navbar;