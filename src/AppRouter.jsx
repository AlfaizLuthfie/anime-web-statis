import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import AnimeTerbaru from "./pages/animeTerbaru";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/anime-baru" element={<AnimeTerbaru/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
