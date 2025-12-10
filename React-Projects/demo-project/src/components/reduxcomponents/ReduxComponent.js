import React from "react";
import getPersonAction from "../../actions/personDetailsAction";
import { connect } from "react-redux";

class ReduxComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getPersonAction());
    }


    render() {
        let data = this.props
        console.log(data.firstName)
        if (data.firstName === undefined) {
            return (
                <h1>Server unavailable 404</h1>
            )
        }
        else
            return (
                <div>
                    <h1>Redux Tutorials</h1>
                    <h2>{data.firstName.firstname}</h2>
                    <h2>{data.firstName.lastname}</h2>
                </div>
            )
    }
}
const mapStateToProps = (state) => {
    return {
        firstName: state.personDeatilsReducer.firstnameData
    }
}

export default connect(mapStateToProps)(ReduxComponent);
