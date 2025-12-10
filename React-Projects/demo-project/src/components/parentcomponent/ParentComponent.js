import React from "react";
import ChildComponent from "../childcomponent/ChildComponent";

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: "Lucky",
                age: 25,
                address: {
                    primaryaddress: "A/P Ramanahalli, Tq sindagi, Dist Vijapura Karnatak 586217",
                    secondaryaddress: "Bellandur Bangalore 586103"
                }
            },
            mobno:null
        }
    }
    getMobileNo = (newno) => {
        this.setState({
            mobno:newno
        })
    }

    render() {
        const mobno=this.state.mobno
        console.log(this.props)
        return (
            <div>
                <h2>ParentComponent</h2>
                <ChildComponent person={this.state.person} getMobileNo={this.getMobileNo} />
                <h2>{this.state.mobno}</h2>
            </div>
        )
    }

}
export default ParentComponent;