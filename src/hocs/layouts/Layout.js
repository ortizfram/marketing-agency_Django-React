import { connect } from "react-redux";
import { motion } from "framer-motion";

// pass children
function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 1 } }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {children}
    </motion.div>
  );
}
// map states redux
const mapStateToProps = (state) => ({});

// use redux
export default connect(mapStateToProps, {})(Layout);
