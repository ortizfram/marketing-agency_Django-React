import Footer from "./../../components/navegation/Footer.js";
import Navbar from "./../../components/navegation/Navbar.js";
import Layout from "./../../hocs/layouts/Layout.js";
import { useEffect } from "react";

function About() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <h1>About</h1>
      </div>
      <Footer />
    </Layout>
  );
}
export default About;
