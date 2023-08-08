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
import { Helmet } from "react-helmet-async";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Virtual MTK | About Us</title>
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
