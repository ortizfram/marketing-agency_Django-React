import Features from "../../components/careers/Features";
import Header from "../../components/careers/Header";
import LogoCloud from "../../components/careers/LogoCloud";
import PositionsList from "../../components/careers/PositionsList";
import Testimonial from "../../components/careers/Testimonial";
import Footer from "./../../components/navegation/Footer";
import Navbar from "./../../components/navegation/Navbar";
import Layout from "./../../hocs/layouts/Layout";
import { useEffect } from "react";

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <Testimonial />
        <LogoCloud />
        <Features />
        <PositionsList />
      </div>
      <Footer />
    </Layout>
  );
}
export default Careers;
