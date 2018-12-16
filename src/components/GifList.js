import React from 'react'

const GifList = props => {
  console.log(props.gifs[0])
    if (props.gifs.length > 0) {
    return (
      <ul>
        <li><img src={props.gifs[0].embed_url}/></li>
        <li><img src={props.gifs[1].embed_url}/></li>
        <li><img src={props.gifs[2].embed_url}/></li>
      </ul>
    )
  }
  else {
    return (
      <p>no gifts yet</p>
    )
  }
}

export default GifList
