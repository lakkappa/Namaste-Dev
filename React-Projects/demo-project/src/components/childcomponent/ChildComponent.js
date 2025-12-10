import React from "react";

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jai Anjaneya",
            mob: 9686134760
        }
    }
    componentDidMount() {
        this.props.getMobileNo(this.state.mob);
    }
    render() {
        console.log(this.props)

        return (
            <div>
                <h2>ChildComponent</h2>
                <h3>{this.props.person.name}</h3>
                <h3>{this.props.person.age}</h3>
                <h3>{this.props.person.address.primaryaddress}</h3>
                <h3>{this.props.person.address.secondaryaddress}</h3>
            </div>
        )
    }

}
export default ChildComponent;