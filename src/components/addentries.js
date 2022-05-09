import { useState } from "react";
import {connect} from 'react-redux'
import {addEntry} from  '../action/actionfun'
function AddEntry(props){
        const [itemName,setItemName]=useState('')
        const [price,setPrice]=useState(0)
        const [itemnameerr,setItemNameErr]=useState('')
        const [priceerr,setPriceerr]=useState('')
        return( 
         <>
        <h1>Add Entries</h1>
        <form onSubmit={(e)=>{
    e.preventDefault()
            var item={
                "itemName":itemName,
                "price":price
            }
    
            props.mydispatch(addEntry(item))
            console.log(item)
        }}>
            <div style={{position:'relative',left:200}}>
           Enter Item Name <br/>
           <input type='text' onChange={(e)=>{
               if(e.target.value.length<=2)
               {
                   setItemNameErr("item name cannot be less then 3")
               }
               else
               {
                   setItemName(e.target.value)
                   setItemNameErr('')
               }
    
           }}/><br/>
           <div style={{backgroundColor:"red"}}> {itemnameerr}</div><br/>
           Enter Price<br/>
           <input type='text' onChange={(e)=>{
        if(e.target.value<100 || e.target.value >=300)
        {
                 setPriceerr("value in range of 100 to 300")
        }
        else{
            setPrice(e.target.value)
            setPriceerr('')
        }
           }}/>
         
    <div style={{backgroundColor:"red"}}> {priceerr}</div><br/>
    <input type='submit' value='Add item' />  </div>
        </form><br/>
    
        {props.data}
    
    
        </>)
    }
    
    const mapDispatchToProps=dispatch=>({
        mydispatch:dispatch
    })
    
    const mapStateToProps=state=>({
        data:state
    })
    
    export default connect(mapStateToProps,mapDispatchToProps) (AddEntry)