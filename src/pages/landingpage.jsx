import AnimeBaru from "../components/AnimeBaruSection/AnimeBaru";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar"
import PopulerAnime from "../components/PopulerSection/PopulerAnime";

function Landingpage() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className="mt-6">
    <PopulerAnime></PopulerAnime>
    </div>
    <div className="mt-6">
    <AnimeBaru lihatLainnya={true} ></AnimeBaru>
    </div>
    </>
  )
}

export default Landingpage;