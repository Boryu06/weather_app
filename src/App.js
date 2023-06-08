import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
