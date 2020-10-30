import React,{Component} from "react";
import Todo from "./Todo";

class TodoList extends Component{
    render(){
        const {items,clearTask,delItem,editTask} = this.props
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {
                items.map(item=>{
                    if(item.item === ''){}
                    else{
                        return(
                        <Todo 
                            key={item.id} 
                            title={item.item} 
                            delItem={()=>delItem(item.id)}
                            editTask={()=>editTask(item.id)}
                        />
                        )
                    }
                    })
                }
                <button 
                    type="button" 
                    className="btn btn-warning btn-block text-capitalize mt-5"
                    onClick={clearTask}
                    >clear all task</button>
            </ul>
        )
    }
}
export default TodoList;