import React, {Component} from "react";

class Todo extends Component{
    render(){
        const {title,delItem,editTask} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="icons">
                    <span className="mx-3 text-success" onClick={editTask}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-3 text-danger" onClick={delItem}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}
export default Todo;