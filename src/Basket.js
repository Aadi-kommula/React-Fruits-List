import React, { useState } from 'react'

function Basket() {
    const [fruits, setfruits]=useState(['Apple','Banana','Grapes'])
    const [msg, setmsg]=useState('')     
    function AddItem(){
        let item=prompt('Enter the name of a fruit you would like to add to the basket.')
        setfruits([...fruits,item])
    }
    function RemoveItem(){
        var info=fruits[fruits.length-1];
        fruits.pop()
        console.log(fruits)
        setfruits([...fruits]) 
        setmsg('Huhu you removed '+info+' from the basket')   
    }
       
  return (
    <>
    <button 
    onClick={AddItem}
    className="btn btn-success m-2">
    Add Item</button>

    <button 
    className="btn btn-danger m-2"
    onClick={RemoveItem}>
    Remove Item</button>
    <center>
    <p>{msg}</p>
    </center>

    {fruits.map((item,index)=><p key={index} className='m-2'>{index+1}.{item}</p>)}
    </>
  )
}

export default Basket;