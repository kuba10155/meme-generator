import React from "react"
import memesData from "../memesData"

export default function Meme() {

  const [meme, setMeme] = React.useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length + 1)
    const url = memesArray[randomNumber].url
    setMeme(url)
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text"/>
        <input className="form--input" type="text" placeholder="Bottom text"/>
        <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
      </div>
      <img className="meme" src={meme}/>
    </main>
  )
}
