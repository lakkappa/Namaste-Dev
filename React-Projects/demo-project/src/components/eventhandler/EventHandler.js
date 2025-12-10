import React from "react";

export default class EventHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            no: 0,
            companyName: " "
        }
    }

    addNo = () => {
        this.setState({
            no: this.state.no + 1
        })
    }

    changeValue = (event) => {
        this.setState({
            companyName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("You Clicked Submit");
    }    

    render() {
        return (
            <div>
                <h1>{this.state.no}</h1>
                <button onClick={this.addNo}>Add</button><br /><br />
                <div>
                    <input type="text" onChange={this.changeValue}></input>
                    <h1>You Entered: {this.state.companyName}</h1>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
