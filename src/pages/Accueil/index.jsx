import { Link } from "react-router-dom"
import logements from '../../datas/logements.json'

const Accueil = () => {

  return (
    <div className="container">
      <h1>Chez vous, partout et ailleurs</h1>
      <ul>
        {
          logements.map(({id, title}) => 
          <li key={id}>
            <Link to={`/fiche/${id}`}>{title}</Link>
          </li>
          )
        }
      </ul>
    </div>
  )
}

export default Accueil