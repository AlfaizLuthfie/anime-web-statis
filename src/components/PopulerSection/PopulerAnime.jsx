import CardPopuler from "../Card/CardPopuler"

function PopulerAnime() {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="font-semibold lg:text-lg ">Popular Anime 🔥</h3>
        <button className="text-sm">Lihat Lainnya</button>
      </div>
        <CardPopuler></CardPopuler>
    </div>
  )
}

export default PopulerAnime