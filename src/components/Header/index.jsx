import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="main-header">
      <Logo />
      <nav>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/apropos'>A propos</NavLink>
      </nav>
    </div>
  )
}

export default Header