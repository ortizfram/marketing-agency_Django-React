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
import { Helmet } from "react-helmet-async";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Virtual MTK | Home</title>
        <meta
          name="description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta
          name="keywords"
          content="agencia de software, agencia de marketing, creacion de pagina web"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.virtualmkt.com/" />
        <meta name="author" content="virtual mkt" />
        <meta name="publisher" content="virtual mkt" />

        {/* Social Media Tags */}
        <meta
          property="og:title"
          content="Virtual MTK | Software Development"
        />
        <meta
          property="og:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta property="og:url" content="https://www.virtualmkt.com/" />
        <meta
          property="og:image"
          content="https://bafybeib2ve4a6yrsyo7zb7ecftqchbzvhhx2otmhmebe4o4ujnfc4c4dry.ipfs.w3s.link/Captura.PNG"
        />

        <meta
          name="twitter:title"
          content="Virtual MTK | Software Development"
        />
        <meta
          name="twitter:description"
          content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones."
        />
        <meta
          name="twitter:image"
          content="https://bafybeib2ve4a6yrsyo7zb7ecftqchbzvhhx2otmhmebe4o4ujnfc4c4dry.ipfs.w3s.link/Captura.PNG"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
