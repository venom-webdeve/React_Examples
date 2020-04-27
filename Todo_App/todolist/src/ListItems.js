import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const ListItems = items.map(item =>{
        return <div className="list" key={item.key}>
               <p><input type="text" id={item.key} value={item.text} onChange={(e)=>{
                props.setUpdate(e.target.value,item.key)}}/>
               <span>
       
               <FontAwesomeIcon className="faicons" onClick={() => {
                   props.deleteItem(item.key)
               }} icon="trash" />
               </span>
               </p>
             
              </div>
    })
    return(
    //  <h1>From ListItems.js</h1>
    <div><FlipMove duration={300} easing="ease-in-out">
    {ListItems}
    </FlipMove></div>
    )
}
export default ListItems;