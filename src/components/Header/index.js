import { Link } from "react-router-dom";
import './index.css'

const Header = () =>(
    <nav>
      <img src='https://res.cloudinary.com/dtsqyytfy/image/upload/v1684565640/website-logo1_vvzuvh.png' alt='website-logo' />
      <ul className="nav-menu">
        <li>
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
            <Link className="nav-link" to="/about">About</Link>
        </li>
        <li>
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
)

export default Header