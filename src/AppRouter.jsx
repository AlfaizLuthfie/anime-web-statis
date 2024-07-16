import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import AnimeTerbaru from "./pages/animeTerbaru";
import AnimeDetail from "./pages/animeDetail";
import ScrollToTop from "./utils/scrollToTop";
import AnimeList from "./components/AnimeList/AnimeList";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/anime-baru" element={<AnimeTerbaru/>} />
        <Route path="/anime/:id" element={<AnimeDetail/>} />
        <Route path="/anime" element={<AnimeList/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
