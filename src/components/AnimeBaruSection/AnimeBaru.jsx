import CardAnimeTerbaru from "../Card/CardAnimeTerbaru";
function AnimeBaru() {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="font-semibold lg:text-lg ">Anime Terbaru </h3>
        <button className="text-sm">Lihat Lainnya</button>
      </div>
      <CardAnimeTerbaru></CardAnimeTerbaru>
    </div>
  );
}

export default AnimeBaru;
