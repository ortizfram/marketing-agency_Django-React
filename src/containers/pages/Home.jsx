import Incentives from "../../components/home/Incentives";
import Header from "./../../components/home/Header";
import Footer from "./../../components/navegation/Footer";
import Navbar from "./../../components/navegation/Navbar";
import UseCases from "./../../components/home/UseCases";
import Features from "./../../components/home/Features";
import Layout from "./../../hocs/layouts/Layout";
import { useEffect } from "react";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-20">
        <Header />
        <Incentives />
        <UseCases />
        <Features />
      </div>
      <Footer />
    </Layout>
  );
}
export default Home;
