import { connect } from "react-redux";

function Navbar() {
  return <nav className="w-full py-10 shadow-md fixed">Navbar</nav>;
}

// map states redux
const mapStateToProps = (state) => ({});

// use redux
export default connect(mapStateToProps, {})(Navbar);
