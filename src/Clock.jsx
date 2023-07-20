import React,{ Component } from "react";

export class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
        this.timer = null
    }

    componentDidMount(){
        this.timer = window.setInterval(()=>{
            this.setState({
                date: new Date()
            })
        })
    }

    render(){
        return <div>
            {this.state.date.toLocaleString()}
        </div>
    }
}