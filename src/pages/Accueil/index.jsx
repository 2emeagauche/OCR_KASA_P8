import { Link } from "react-router-dom"
import logements from '../../datas/logements.json'
import bannerImg from '../../assets/hero-img-accueil.png'
import Banner from "../../components/Banner"

const Accueil = () => {
  
  return (
    <div className="container">
      <Banner imgsrc={bannerImg} title={'Chez vous, partout et ailleurs'} />
      <ul className="logements-list">
        {
          logements.map(({id, title, cover}) => 
          <li key={id}>
            <Link to={`/fiche/${id}`}>
              <img src={cover} alt='' />
              <p>{title}</p>
            </Link>
          </li>
          )
        }
      </ul>
    </div>
  )
}

export default Accueil