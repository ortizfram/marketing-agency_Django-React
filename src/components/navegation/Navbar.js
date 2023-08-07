import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo_sharp from "assets/img/logo.png";
import loading_dots from "assets/img/loading-dots.gif";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";

function Navbar() {
  const [loading, setLoading] = useState(true);

  return (
    <nav className="w-full py-10 top-0 fixed">
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          {/* LOGO */}
          <Link to="/" className="ml-4 mt-2 flex items-center">
            <img id="logo" src={logo_sharp} width={70} height={60} alt="logo" />
            <h1 className="ml-2 font-bold h-12 text-3xl flex items-center font-righteous">
              Virtual MKT
            </h1>
          </Link>
          {/* menu elements */}
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/cases"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Cases
            </NavLink>
            <NavLink
              to="/services"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              About Us
            </NavLink>
            <NavLink
              to="/careers"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Careers
            </NavLink>
            <NavLink
              to="/blog"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="ml-12 inline-flex items-center rounded-md border transition duration-300 border-transparent bg-orange-500 px-6 py-3 text-lg font-bold text-white shadow-sm hover:bg-gray-900 "
            >
              Hire us
              <DotLoader
                className="ml-4"
                loading={loading}
                size={20}
                color="#f2f2f2"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// map states redux
const mapStateToProps = (state) => ({});

// use redux
export default connect(mapStateToProps, {})(Navbar);
