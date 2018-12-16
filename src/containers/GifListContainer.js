import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      gifs: []
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r=>r.json())
    .then(p=> this.setState({
      gifs: p.data
    }, () => console.log(this.state.gifs)))
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    }, () => console.log(this.state.searchTerm))
  }
  
  render() {
    const { state: {searchTerm, gifs}, handleSubmit, handleChange} = this
    return (
      <div>
      <GifSearch handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm}/>
      <GifList gifs={gifs}/>
      </div>
    )
  }
}
