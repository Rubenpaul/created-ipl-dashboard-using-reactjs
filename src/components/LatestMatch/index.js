// Write your code here
import './index.css'

import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    console.log(latestMatchDetails)
    console.log(latestMatchDetails.competingTeam)
    return (
      <div>
        <p className="latest-matches-text">LatestMatches</p>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default LatestMatch

