import React from "react"

import Header from "./Header"
import NewGenerator from "./NewGenerator"

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render () {
        return(
            <div>
                <Header />
                <NewGenerator />
            </div>
        )
    }
}

export default App