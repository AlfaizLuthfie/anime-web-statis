import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import AnimeTerbaru from "./pages/animeTerbaru";
import AnimeDetail from "./pages/animeDetail";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/anime-baru" element={<AnimeTerbaru/>} />
        <Route path="/anime/:id" element={<AnimeDetail/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
