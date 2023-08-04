import Error404 from "containers/errors/Error404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
