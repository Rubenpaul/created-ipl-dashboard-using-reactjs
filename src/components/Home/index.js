// Write your code here
import './index.css'
import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeamsList: []}

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const iplTeamsList = teams

    const updatedIplTeamsList = iplTeamsList.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeamsList: updatedIplTeamsList})
  }

  render() {
    const {iplTeamsList} = this.state

    return (
      <div className="home-container">
        <div className="dashboard-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-text">IPL Dashboard</h1>
        </div>
        <ul className="ipl-teams-container">
          {iplTeamsList.map(eachTeam => (
            <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
