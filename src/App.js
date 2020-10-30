import React,{ Component } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import uuid from "react-uuid";

class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleInputChange = e =>{
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault()

    const newAddedItem = {
      id:this.state.id,
      item:this.state.item
    }
    const updatedItems = [...this.state.items,newAddedItem];

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  }
  clearAllTask = ()=>{
    this.setState({
      items:[]
    })
  }
  delItem = id =>{
    const findItems = this.state.items.filter(item=>item.id !== id);
    this.setState({
      items:findItems
    })
  }
  editTask = id =>{
    const findItems = this.state.items.filter(item=>item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items:findItems,
      item:selectedItem.item,
      editItem:true,
      id:id
    })
  }
  render(){
    return (
      <div className="App">
        <header>
          <h1>Todo</h1>
        </header>
        <div className="container">
          <Form 
            item={this.state.item} 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}/>
          <TodoList 
            items={this.state.items} 
            clearTask={this.clearAllTask}
            delItem = {this.delItem}
            editTask={this.editTask}
          />
        </div>
      </div>
    );
  }
}

export default App;