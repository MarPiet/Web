import React from "react"
import Content from "./Content.js"
import "./style.css"

class App extends React.Component{

    componentDidMount(){
        document.title = "Projects"
    }
    render(){
        return(
            <Content/>
        )
    }
}


export default App