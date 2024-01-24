import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/page1'>Une page</Link>
      </nav>
    </div>
  )
}

export default Header