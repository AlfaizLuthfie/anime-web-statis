
export function Badge({children}) {
  return (
    <>
        <p className="text-white border border-white w-24 rounded-lg text-xs pl-2 py-1 hover:bg-primary hover:border-primary cursor-pointer">
            {children}
        </p>
    </>
  )
}

export function BadgePink({children}){
  return (
    <>
        <p className="text-white bg-primary border border-primary rounded-lg text-xs px-2 py-1 cursor-pointer">
            {children}
        </p>
    </>
  )
}


export function BadgeBlack({children, active, setActiveEpisode}){
  
  return(
    <button className={`text-xs w-[100px] md:text-sm rounded-xl py-1.5 cursor-pointer border-slate-900 border ${active ? "bg-slate-800 text-white" : "bg-white text-slate-800"}`} onClick={setActiveEpisode}>
      {children}
    </button>
  )
}