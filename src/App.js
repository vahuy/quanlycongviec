import React, {Component} from "react";
import FormAdd from "./components/FormAdd";
import FormManage from "./components/FormManage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onShowAddJob: true
        }
    }

    showAddJob = () => {
        if (this.state.onShowAddJob) {
            return (
                <div className="panel panel-default">
                    <div className="panel-body">
                        <FormAdd
                            handleOnChange={this.handleOnChange}
                        />
                    </div>
                </div>
            )
        }
    }

    handleOnclick = () => {

    }

    handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="container">
                <div>
                    {/*<h1>Quan ly cong viec</h1>*/}
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/*Them/Sua*/}
                        {this.showAddJob()}
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <FormManage/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
