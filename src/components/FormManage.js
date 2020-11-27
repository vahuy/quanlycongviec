import React, {Component} from "react";
import PropTypes from "prop-types";

class FormManage extends Component{
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <button type="button" className="btn btn-primary">Add Job</button>
                        <div><input type="text" name="txtSearch"/><button type="button" className="btn btn-primary">Search</button></div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div>
                                    <button type="button" className="btn btn-default">Left</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-default">Middle</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-default">Right</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ten</th>
                                <th>Trang thai</th>
                                <th>Hanh dong</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <div>
                                        <input
                                           type="text"
                                           name="name"
                                           id="inputID"
                                           className="form-control"
                                           value={this.props.txtNameSearch}
                                           onChange={this.props.handleOnChange}
                                           required="required"/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

FormManage.propTypes = {
    handleOnChange: PropTypes.func,
    txtNameSearch: PropTypes.string
}
export default FormManage;