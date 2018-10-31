import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date : new Date()});
    }

    render(){
        return(
            <div>
                <h3> Header</h3>{this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Header;