import {Component} from 'react'
import EachRow from '../EachRow'
import FullImage from '../FullImage'
import './index.css'

class Home extends Component {
  state = {details: [], thumbNailDetails: '', count: 1}

  componentDidMount() {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_page=1&amp;_limit=20',
    )
    console.log(response.ok)
    if (response.ok) {
      const data = await response.json()
      this.setState({details: data})
    }
  }

  onClickEachThumbNail = details => {
    this.setState({thumbNailDetails: details})
  }

  render() {
    const {details, thumbNailDetails} = this.state
    return (
      <div className="home-bg">
        <h1>Two Pag React Application</h1>
        {thumbNailDetails === '' ? (
          <ul className="ul">
            {details.map(each => (
              <EachRow
                key={each.id}
                eachRow={each}
                onClickEachThumbNail={this.onClickEachThumbNail}
              />
            ))}
          </ul>
        ) : (
          <FullImage list1={thumbNailDetails} />
        )}
      </div>
    )
  }
}

export default Home
