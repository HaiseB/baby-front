import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/User/Users";
import User from "./pages/User/User";
import Teams from "./pages/Team/Teams";
import Games from "./pages/Game/Games";
import Game from "./pages/Game/Game";
import CreateGame from "./pages/Game/CreateGame";
import NoPage from "./pages/NoPage";

function App() {
  const siteTitle = 'BabyFront';

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout siteTitle={siteTitle} />}>
        <Route index element={<Home />} />
        <Route path="Users" element={<Users />} />
        <Route path="User/:id" element={<User />} />
        <Route path="Games" element={<Games />} />
        <Route path="Game/:id" element={<Game />} />
        <Route path="Create_Game" element={<CreateGame />} />
        <Route path="Teams" element={<Teams />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App