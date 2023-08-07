import Header from "./../../components/home/Header";
import Footer from "./../../components/navegation/Footer";
import Navbar from "./../../components/navegation/Navbar";
import Layout from "./../../hocs/layouts/Layout";
import { useEffect } from "react";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-20">
        <Header />
      </div>
      <Footer />
    </Layout>
  );
}
export default Home;
