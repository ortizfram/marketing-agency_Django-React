import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedRoutes from "./AnimatedRoutes";

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
          <AnimatedRoutes />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
