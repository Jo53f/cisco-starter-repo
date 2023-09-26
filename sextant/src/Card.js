import React, { Component } from "react";
import './Card.css';

class Card extends Component{
    render(){
        return(
            <div className="Card">
                <header>{this.props.name}</header>
                <div className="Cardcontent">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;