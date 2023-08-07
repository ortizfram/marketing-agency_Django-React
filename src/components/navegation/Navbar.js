import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo_sharp from "assets/img/logo.png";

function Navbar() {
  return (
    <nav className="w-full py-10 shadow-md fixed">
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          {/* LOGO */}
          <div className="ml-4 mt-2 flex items-center">
            <img src={logo_sharp} width={70} height={60} alt="logo" />
            <h1 className="ml-2 font-bold h-12 text-3xl flex items-center font-righteous">
              Virtual MKT
            </h1>
          </div>
          {/* menu elements */}
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              to="/cases"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Cases
            </Link>
            <Link
              to="/services"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Services
            </Link>
            <Link
              to="/us"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Us
            </Link>
            <Link
              to="/careers"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              Careers
            </Link>
            <Link
              to="/blog"
              className="mr-4 text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out "
            >
              blog
            </Link>
            <button
              type="button"
              className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create new job
            </button>
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
