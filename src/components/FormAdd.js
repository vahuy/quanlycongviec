import React, {Component} from "react";
import PropTypes from "prop-types";

class FormAdd extends Component{
    render() {
        return(
            <div>
                <label>ADD</label>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <label>Ten:
                        <input type="text"
                               name="txtJobName"
                               id="inputID"
                               className="form-control"
                               value={this.props.txtJobName}
                               onChange={this.props.handleOnChange}
                               required="required"/></label>
                        <label>Trang Thai:</label>
                        <select name="jobStatus"
                                id="inputID"
                                className="form-control"
                                onChange={this.props.handleOnChange}
                        >
                        <option value="0"> -- Select One --</option>
                        <option value="1">Active</option>
                        <option value="2">Deactivate</option>
                    </select>
                        <button type="submit" className="btn btn-default">Save</button>
                        <button type="reset" className="btn btn-default">Reset</button>
                    </div>
                </div>

                <div>aaa<i className="fab fa-500px"/></div>
                <div>bbb<i className="fab fa-accessible-icon"/></div>
                <div>ccc<i className="fas fa-ambulance"/></div>
                <div>ddd<i className="fas fa-ankh"/></div>
                <div>eee<i className="fas fa-laptop-code"/></div>
            </div>

        )
    }
}
FormAdd.propTypes = {
    handleOnChange: PropTypes.func,
    txtJobName: PropTypes.string
}
export default FormAdd;