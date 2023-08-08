import Header from "../../components/about/Header.js";
import Footer from "./../../components/navegation/Footer.js";
import Navbar from "./../../components/navegation/Navbar.js";
import TestStats from "./../../components/about/TestStats.js";
import Layout from "./../../hocs/layouts/Layout.js";
import { useEffect } from "react";
import Images from "../../components/about/Images.js";
import Clients from "../../components/about/Clients.js";
import LogoCloud from "../../components/about/LogoCloud.js";
import Features from "../../components/about/Features.js";
import Team from "../../components/about/Team.js";
import CTA from "../../components/about/CTA.js";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <TestStats />
        <Images />
        <Clients />
        <LogoCloud />
        <Features />
        <Team />
        <CTA />
      </div>
      <Footer />
    </Layout>
  );
}
export default About;
