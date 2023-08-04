import { connect } from "react-redux";

function Navbar() {
  return <div>Navbar</div>;
}

// map states redux
const mapStateToProps = (state) => ({});

// use redux
export default connect(mapStateToProps, {})(Navbar);
