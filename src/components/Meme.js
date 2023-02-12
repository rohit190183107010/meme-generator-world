import React from "react";
import memesData from "./memesData";

export default function Meme() {
    const [url, setUrl] = React.useState("")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function randomizer() {
        const memeArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--inputs"/>
                <input type="text" placeholder="Bottom text" className="form--inputs"/>
                <button onClick={randomizer} className="form--button">Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}