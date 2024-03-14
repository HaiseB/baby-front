import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import Teams from "./pages/Teams";
import CreateReadUpdateGame from "./pages/CreateReadUpdateGame";
import NoPage from "./pages/NoPage";

function App() {
  const siteTitle = 'BabyFront';

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout siteTitle={siteTitle} />}>
        <Route index element={<Home />} />
        <Route path="Users" element={<Users />} />
        <Route path="User/:id" element={<User />} />
        <Route path="Teams" element={<Teams />} />
        <Route path="CreateReadUpdateGame" element={<CreateReadUpdateGame />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App