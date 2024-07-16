import AnimeBaru from "../components/AnimeBaruSection/AnimeBaru";
import Footer from "../components/Footer/Footer";
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
    <div className="mt-6">
      <Footer></Footer>
    </div>
    </>
  )
}

export default Landingpage;