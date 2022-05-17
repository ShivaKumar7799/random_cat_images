import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CatImages.css'

function CatImages() {
  const [data,setData] = useState();

 const randomImage = () => {
    axios.get("https://api.thecatapi.com/v1/images/search").then( (resp) => {
      console.log(resp.data[0].url);
      setData(resp.data[0].url)
    })
 }
 
  return (
   <div className='container' >
      <h1>Random Cat Images Generator</h1>
     { data ? <img src = {data} width= "300px" height="300px" /> : <img style={{width : "300px", height : "300px"}} src='https://cdn2.thecatapi.com/images/5hq.jpg'/> }
      <br />
      <button onClick={randomImage} > Get Random Cat Images</button>
   </div>
  )
}

export default CatImages