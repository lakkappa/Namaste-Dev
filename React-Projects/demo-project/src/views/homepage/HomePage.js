import React from "react";
import ParentComponent from "../../components/parentcomponent/ParentComponent";
import EventHandler from "../../components/eventhandler/EventHandler";
import FormComponent from "../../components/formcomponent/FormComponent";
import { Counter } from "../../components/addtodo/Counter";
import ReduxComponent from "../../components/readuxcomponent/ReduxComponent";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jai Anjaneya"
        }
    }


    render() {
        return (
            <div>
                {/* <h1>{this.state.name}</h1> */}
                {/* <ParentComponent /> */}
                {/* <EventHandler/> */}
                {/* <FormComponent/> */}
                {/* <Counter/> */}
                <ReduxComponent/>
            </div>
        )
    }


}
export default HomePage;