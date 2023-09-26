import { Component } from "react";
const socket = new WebSocket("ws://localhost:55455")

class Latency extends Component{

    constructor(){

        super()
        this.state = {
            laten : null
        }

    }
    

    componentDidMount(){
        socket.addEventListener("message", (event) => {
            this.setState({laten : Date.now() - event.data})
        })

    }

    render(){
        return(
            <p>{this.state.laten}</p>
        )
    }

}

export default Latency;