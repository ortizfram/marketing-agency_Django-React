import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

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
  );
}

export default App;
