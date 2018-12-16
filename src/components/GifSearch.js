import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor(props) {
      super(props)
      
    }

  render() {
    const { props: {handleSubmit, handleChange, searchTerm}} = this
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={searchTerm}/>
        <button type="submit">Search gifs</button>
        </form>
    )
  }


}
