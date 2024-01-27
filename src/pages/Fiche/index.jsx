import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Fiche = ({logements}) => {
  
  const {ficheId} = useParams()
  const logementInfos = logements.find((logement) => logement.id === ficheId)
  console.log(logementInfos)
  const navigate = useNavigate()
  
  useEffect(() => {if(!logementInfos) navigate("*")})
  
  return (
    logementInfos && <div className="container fiche">
      <h1>{logementInfos.title}</h1>
    </div>
  )
}

export default Fiche