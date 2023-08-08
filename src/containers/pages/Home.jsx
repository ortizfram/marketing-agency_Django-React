import Incentives from "../../components/home/Incentives";
import Header from "./../../components/home/Header";
import Footer from "./../../components/navegation/Footer";
import Navbar from "./../../components/navegation/Navbar";
import UseCases from "./../../components/home/UseCases";
import Features from "./../../components/home/Features";
import LogoCloud from "./../../components/home/LogoCloud";
import CTA from "./../../components/home/CTA";
import Layout from "./../../hocs/layouts/Layout";
import { useEffect } from "react";
import BlogList from "../../components/home/BlogList";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-40">
        <Header />
        <Incentives />
        <UseCases />
        <Features />
        <CTA />
        <LogoCloud />
        <BlogList />
      </div>
      <Footer />
    </Layout>
  );
}
export default Home;
