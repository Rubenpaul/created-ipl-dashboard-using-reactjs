// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="card-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <div className="team-name-container">
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
