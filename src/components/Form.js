import React,{Component} from "react";

class Form extends Component{
    render(){
        const {item,handleInputChange,handleSubmit,editItem} = this.props;
        return(
            <div>
                <h3 className="text-capitalize text-center">todo input</h3>
                <form className="add-task" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="form-control text-capitalize" 
                            placeholder="add todo items"
                            value={item}
                            onChange={handleInputChange}
                        />
                        <button type="submit"
                        className={editItem ?"btn btn-success btn-lg text-uppercase":"btn btn-warning btn-lg text-uppercase"}>{editItem ? 'edit task' : 'add task'}</button>
                </form>
            </div>
        )
    }
}
export default Form;

