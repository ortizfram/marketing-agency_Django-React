import CasesList from "../../components/cases/CasesList";
import Header from "../../components/cases/Header";
import Footer from "./../../components/navegation/Footer";
import Navbar from "./../../components/navegation/Navbar";
import Layout from "./../../hocs/layouts/Layout";
import { useEffect } from "react";

function Cases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <CasesList />
      </div>
      <Footer />
    </Layout>
  );
}
export default Cases;
