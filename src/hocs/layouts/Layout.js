import { coonnect } from "react-redux";

// pass children
function Layout({ children }) {
  return <div>{children}</div>;
}
// map states redux
const mapStateToProps = (state) => ({});

// use redux
export default coonnect(mapStateToProps, {})(Layout);
