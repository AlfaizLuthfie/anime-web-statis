import AnimeBaru from '../components/AnimeBaruSection/AnimeBaru'
import Navbar from '../components/Navbar/Navbar';

function AnimeTerbaru() {
  return (
    <div>
        <div className='mb-16'>
            <Navbar></Navbar>
        </div>
        <div>
            <AnimeBaru></AnimeBaru>
        </div>
    </div>
  )
}

export default AnimeTerbaru;