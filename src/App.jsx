import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import Teams from "./pages/Teams";
import NoPage from "./pages/NoPage";

function App() {
  const siteTitle = 'BabyFront';

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout siteTitle={siteTitle} />}>
        <Route index element={<Home />} />
        <Route path="Leagues" element={<Leagues />} />
        <Route path="Teams" element={<Teams />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App