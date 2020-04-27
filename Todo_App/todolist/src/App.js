import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component{

constructor(props){
  super(props);
this.state={
  items:[],
  currentItem:{
    text:'',
    key:''
  }
}
this.handleInput = this.handleInput.bind(this);
this.addItem = this.addItem.bind(this);
this.deleteItem = this.deleteItem.bind(this);
this.setUpdate = this.setUpdate.bind(this);

}
handleInput(event){
  this.setState({
       currentItem:{
         text:event.target.value,
         key:Date.now()
       }
  })
}
addItem(event){
  event.preventDefault();
  const newItem = this.state.currentItem;
  console.log(newItem);
  if(newItem.text!=="")
  {
    const newitems=[...this.state.items,newItem];
    this.setState({
      items:newitems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
}
//deleting the record
deleteItem(key){
  const filteredItems = this.state.items.filter(item=>item.key !== key);
  this.setState({
    items:filteredItems
  })
}
//updating record in todo list
setUpdate(text,key){
  console.log("items:"+this.state.items);
  const items = this.state.items;
  items.map(item =>{      
    if(item.key === key){
      console.log(item.key +"    "+key)
      item.text= text;
    }
  })
  this.setState({
    items: items
  })
  
 
}

  render(){
  return (
    <div className="App">
    <h1>Todo App</h1>
           <header>
           <form id="todoFrm" onSubmit={this.addItem}>
           <input type="text" placeholder="Enter text here" value={this.state.currentItem.text}
           onChange={this.handleInput}/>
           <button type="submit">Add</button>
           
           </form>
           </header>
           <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
           </div>
  );
}
}

export default App;
