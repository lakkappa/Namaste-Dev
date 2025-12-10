import React from "react";
import { connect } from "react-redux";
import ReactLifeCycle from "../../components/reactlifecycle/ReactLifeCycle";
import getPersonAction from "../../actions/personDetailsAction";

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getPersonAction());
    }

    render() {
        console.log(this.props)
        if (this.props.data === undefined) {
            return(
                <></>
            )
        }else
        return (
            <div>
                <h2>DashboardPage</h2>
                <ReactLifeCycle/>
                {/* <h1>{this.props.data.firstname}</h1> */}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        data: state.personDeatilsReducer.firstnameData
    }
}

export default connect(mapStateToProps)(DashboardPage);