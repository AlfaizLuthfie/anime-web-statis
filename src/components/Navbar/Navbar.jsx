import { Link } from "react-router-dom"
import IconNavbar from "./IconNavbar"

function Navbar() {
  return (
    <div className="fixed z-50 py-2 w-full bg-gray-800 top-0">
        <div className="container">
          <Link to="/">
            <IconNavbar></IconNavbar>
          </Link>

        </div>
    </div>
  )
}

export default Navbar