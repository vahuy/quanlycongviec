import React, {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Quan ly cong viec</h1>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {/*Them/Sua*/}
                        <div className="panel panel-default">
                            <div className="panel-body">
                                them cong viec
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div><button type="submit">Them cong viec</button></div>
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <input type="text" name="name" id="inputID" className="form-control" value=""
                                               title="" required="required"/><button type="submit">Tim</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>aaa<i className="fab fa-500px"/></div>
                <div>bbb<i className="fab fa-accessible-icon"/></div>
                <div>ccc<i className="fas fa-ambulance"/></div>
                <div>ddd<i className="fas fa-ankh"/></div>
                <div>eee<i className="fas fa-laptop-code"/></div>
            </div>
        );
    }
}

export default App;
