import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/apropos'>A propos</Link>
      </nav>
    </div>
  )
}

export default Header