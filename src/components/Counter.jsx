import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, add } from '../redux/counterSlice'


function Counter() {


  // to do the actions we need to dispatch the actions

  const dispatch=useDispatch()


const[amount,setAmount]=useState('')

// function to add the amount

const handleIncrement=()=>{
  if(amount==''){
    alert('please enter a value')
  }else{
    // update value in store 
    dispatch(add(Number(amount)))

  }
}

const count=useSelector((state)=>state.counter.count)

  return (
    <>
    <div style={{height:'70vh'}} className="w-100 d-flex justify-content-center">
    <div className='align-items-center justify-content-center flex-column border rounded p-5 w-10 d-flex'>

        <h1>{count}</h1>
        <div >
            <button type="button" class="btn btn-danger mx-2" onClick={()=>dispatch(decrement())}>Decrease</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={()=>dispatch(reset())}>reset</button>
            <button type="button" class="btn btn-success mx-2" onClick={()=>dispatch(increment())}>Increase</button>
        </div>
        <div className='d-flex m-3 '>
            <input type="text" class="form-control" id="inputCity" placeholder='enter the amount to be incremented'onChange={e=>setAmount(e.target.value)}/>
            <button type="button" class="btn btn-primary ms-2" onClick={handleIncrement}>Add amount</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Counter