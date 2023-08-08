import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Cases from "./containers/pages/Cases";
import Services from "./containers/pages/Services";
import About from "./containers/pages/About";
import Careers from "./containers/pages/Careers";
import Contact from "./containers/pages/Contact";
import Blog from "./containers/pages/Blog";

function App() {
  return (
    <HelmetProvider>
      {/* METATAGS */}
      <Helmet>
        <title>Virtual MTK | Software Development</title>
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

      <Provider store={store}>
        <Router>
          <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} />
            {/* views Display */}
            <Route path="/" element={<Home />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
