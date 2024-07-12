import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar"
import PopulerAnime from "../components/PopulerSection/PopulerAnime";

function Landingpage() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div>
    <PopulerAnime></PopulerAnime>
    </div>
    </>
  )
}

export default Landingpage;