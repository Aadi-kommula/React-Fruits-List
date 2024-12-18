import React, { useState } from 'react'

function Basket() {
    const [fruits, setfruits]=useState(['Apple','Banana','Grapes'])
    const [msg, setmsg]=useState('')
    
    function AddItem() {
      let item = document.getElementById('inp').value.trim();     
      if (item === '') {
        alert("Enter a fruit name before hitting add item");
        
      }
    
      let isDuplicate = false;
      for (let x in fruits) {
        if (fruits[x].toLowerCase() === item.toLowerCase()) {
          isDuplicate = true;
          break;
        }
      }    
      if (isDuplicate) {
        setmsg('Duplicates not allowed');
      } else {
        if(item !==''){
        setfruits([...fruits, item]); 
        setmsg(`${item} added to the basket`);
        document.getElementById('inp').value = ''; 
      }
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
    function SpecItem() {
      var val = document.getElementById('inp1').value.trim();
      if (fruits.length !== 0) {        
        if (val !== '') {
          let found = false; 
          for (let x in fruits) {
            if (fruits[x].toLowerCase() === val.toLowerCase()) { 
              var index = fruits.indexOf(fruits[x]); 
              fruits.splice(index, 1);
              var info = val;
              setmsg('Huhu you removed ' + info + ' from the basket');
              setfruits([...fruits]);
              document.getElementById('inp1').value = '';
              found = true;
              break;
            }
          }
          if (!found) {
            setmsg('Item not found in the basket');
          }
        } else {
          setmsg('Please enter a fruit to remove');
        }
      } else {
        setmsg('No Fruits to remove');
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
    Remove Last Item</button><br/>
    <input id='inp1' type='text' className='m-2' placeholder='Enter a fruit to delete' ></input>
    <button 
    className="btn btn-danger m-2"
    onClick={SpecItem}>
    Remove Specific Item</button><br/>

    <center>
    <p>{msg}</p>
    </center>

    {fruits.map((item,index)=><p key={index} className='m-2'>{index+1}.{item}</p>)}
    </>
  )
}

export default Basket;