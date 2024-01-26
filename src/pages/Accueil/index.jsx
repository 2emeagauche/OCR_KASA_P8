import bannerImg from '../../assets/hero-img-accueil.png'
import Banner from "../../components/Banner"
import Card from "../../components/Card"

const Accueil = ({logements}) => {
  
  return (
    <div className="container">
      <Banner imgsrc={bannerImg} title={'Chez vous, partout et ailleurs'} />
      <ul className="logements-list">
        {
          logements.map(({id, title, cover}) => 
            <Card key={id} id={id} title={title} cover={cover} />
          )
        }
      </ul>
    </div>
  )
}

export default Accueil