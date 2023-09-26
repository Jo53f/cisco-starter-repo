import { Component } from "react";

class IP extends Component{

    constructor(props){
        super(props)
        this.state = {
            url : props.url,
            IPAddress : null
        }
    }

    componentDidMount(){
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({IPAddress : data.ip}))
    }

    render(){
        return(
            <p>
                {this.state.IPAddress}
            </p>
        )
    }
}

export default IP;