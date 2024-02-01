import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Carousel from "../../components/Carousel"
import Infos from "../../components/Infos"

const Fiche = ({logements}) => {
  
  const {ficheId} = useParams()
  const logementInfos = logements.find((logement) => logement.id === ficheId)
  
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!logementInfos) {
      navigate('*')
    }
  })
  if(!logementInfos) {
    return
  }

  return (
    <div className="container">
      <Carousel carouselLength={logementInfos.pictures.length} pictures={logementInfos.pictures} />
      <Infos logementInfos={logementInfos} />
    </div>
  )
}

export default Fiche