
function Badge({children}) {
  return (
    <>
        <p className="text-white border border-white w-24 rounded-lg text-xs pl-2 py-1 hover:bg-primary hover:border-primary cursor-pointer">
            {children}
        </p>
    </>
  )
}

export default Badge;