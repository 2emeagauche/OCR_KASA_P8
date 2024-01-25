import { useParams } from "react-router-dom"

const Fiche = () => {

  const {ficheId} = useParams()

  return (
    <div className="container">
      <h1>Fiche du logement {ficheId}</h1>
    </div>
  )
}

export default Fiche