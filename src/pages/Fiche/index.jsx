import { useParams } from "react-router-dom"

const Fiche = ({logements}) => {

  const {ficheId} = useParams()
  const logementInfos = logements.find((logement) => logement.id === ficheId)

  return (
    <div className="container fiche">
      <h1>{logementInfos.title}</h1>
    </div>
  )
}

export default Fiche