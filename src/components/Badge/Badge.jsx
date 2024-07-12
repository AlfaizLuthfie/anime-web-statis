
export function Badge({children}) {
  return (
    <>
        <p className="text-white border border-white w-24 rounded-lg text-xs pl-2 py-1 hover:bg-primary hover:border-primary cursor-pointer">
            {children}
        </p>
    </>
  )
}

export function BadgeBlack({children}){
  return (
    <>
        <p className="text-white bg-primary border border-primary rounded-lg text-xs px-2 py-1 cursor-pointer">
            {children}
        </p>
    </>
  )
}