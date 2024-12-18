import React, { useState } from 'react'

function Basket() {
    const [fruits, setfruits]=useState(['Apple','Banana','Grapes'])
    const [msg, setmsg]=useState('')     
    function AddItem(){
        let item=document.getElementById('inp').value
        if(item !==''){
        setfruits([...fruits,item])
        document.getElementById('inp').value=''
        }
        else{
          alert("Enter a fruit name before hitting add item")
        }
      

    }
    function RemoveItem(){
      if(fruits.length !==0){
        var info=fruits[fruits.length-1];
        fruits.pop()
        console.log(fruits)
        setfruits([...fruits]) 
        setmsg('Huhu you removed '+info+' from the basket')  
      } 
      else{
        setmsg('No Fruits to remove')  
      }
    }
       
  return (
    <>
    <input id='inp' type='text' className='m-2' placeholder='Enter a fruit name' ></input>
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