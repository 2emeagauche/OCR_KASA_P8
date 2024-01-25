import { useParams } from "react-router-dom"

const Fiche = () => {

  const {ficheId} = useParams()

  return (
    <h1>Fiche du logement {ficheId}</h1>
  )
}

export default Fiche