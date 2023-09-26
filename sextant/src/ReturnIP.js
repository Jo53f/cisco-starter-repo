import { Component } from "react";

class IP extends Component{

    constructor(props){
        super(props)
        this.state = {
            url : props.url,
            IPAddress : null
        }
    }

    findIP(){
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({IPAddress : data.ip}))

        if (this.state.IPAddress == null) {
            this.setState({IPAddress : "Hello"})
        }
        else{
            this.setState({IPAddress : "Hello"})
        }
    }

    render(){
        return(
            <span>
                {this.state.IPAddress}
            </span>
        )
    }
}

export default IP;