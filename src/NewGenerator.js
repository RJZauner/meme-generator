import React from "react"

class NewGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: " ",
            bottomText:  "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        //fetches data from an API
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImages: memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit (event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randMemeImg = this.state.allMemeImages[randNum].url
        this.setState({
            randomImage: randMemeImg
        })
    }
    

    render () {
        return(
            <div>
                <form className = "meme-form" onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text" 
                        value = {this.state.topText}
                        name = "topText"
                        placeholder = "Top Text here"
                        onChange = {this.handleChange}
                    />
                    <br />

                    <input 
                        type = "text" 
                        value = {this.state.bottomText}
                        name = "bottomText"
                        placeholder = "Bottom Text here"
                        onChange = {this.handleChange}
                    />

                    <button>Generate</button>

                </form>
                <div className = "meme">
                    <img src = {this.state.randomImage}/>
                    <h2 className = "top">{this.state.topText}</h2>
                    <h2 className = "bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default NewGenerator