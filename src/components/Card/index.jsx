import { Link } from "react-router-dom";

const Card = ({id, title, cover}) => {
  return (
    <li>
      <Link to={`/fiche/${id}`}>
        <img src={cover} alt='' />
        <p>{title}</p>
      </Link>
    </li>
  )
}

export default Card;