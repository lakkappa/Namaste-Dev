import React from "react";

export default class FormComponent extends React.Component {

    state = {
        mobno:''
    }

    onSubmitMethod = (event) => {
        alert('A name was submitted: ' + this.state.mobno);
        event.preventDefault();

    }

    onChangeMob = (event) => {
        this.setState({mobno: event.target.value});
    }

    render() {
        console.log(this.state.mobno)
        return (
            <div>
                <h1>
                    Form Component
                </h1>
                <div>
                    <form onSubmit={this.onSubmitMethod}>
                        {/* <label> Name:<input type="text" /></label>
                        <label> LastName:<input type="text" /></label><br/>
                        <label> Age:<input type="text" /></label> */}
                        <label> MobNo:<input type="text" value={this.state.mobno} onChange={this.onChangeMob}/></label><br/><br/>
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        )
    }
}