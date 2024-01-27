import { Link } from "react-router-dom"

const PageErreur = () => {
  return (
    <div className="container container-404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retournez sur la page d'accueil</Link>
    </div>
  )
}

export default PageErreur