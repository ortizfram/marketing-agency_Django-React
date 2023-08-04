// import BlogList from "components/home/BlogList";
// import CTA from "components/home/CTA";
// import Features from "components/home/Features";
// import Header from "components/home/Header";
// import Incentives from "components/home/Incentives";
// import LogoCloud from "components/home/LogoCloud";
// import UseCases from "components/home/UseCases";
// import Footer from "components/navigation/Footer";
// import Navbar from "components/navigation/Navbar";
// import Scroll from "components/SmoothScrollbar";
// import Layout from "hocs/layouts/Layout";
import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";

function Home() {
  return (
    <Layout>
      <Navbar />
      <h1>home</h1>
      <Footer />
    </Layout>
  );
}
export default Home;
