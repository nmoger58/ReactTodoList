"use client"
import { Name } from '@/Helper/Context';
import React, { useContext, useState } from 'react'

const page = () => {
  let name=useContext(Name)
  let [task,settask]=useState("");
  let [description,setdescription]=useState("")
  let [mainTask , setMainTask]=useState([])
  let [display,setdisplay]=useState("block");
  let [search,setsearch]=useState('')
  const submithandler=(e)=>{
    if(mainTask.length>0){
      setdisplay('none')
    }
    e.preventDefault()
    settask("")
    setdescription("")
    setMainTask([...mainTask,{task,description}])
    // console.log(task,description)
    console.log(mainTask)
  }
  const searchhandler=(e)=>{
   e.preventDefault()
   let copytask=[...mainTask];
   copytask.splice(Number(search)-1,1);
   setMainTask(copytask)
   setsearch("")
  }
  const deletehandler=(i)=>{
let copytask=[...mainTask];
copytask.splice(i,1);
setMainTask(copytask);
  }
  // let rendertask=<h2>No Task Available</h2>
  return (
    <div>

      <h2 className='bg-black text-white p-5 text-3xl text-center underline font-bold'>User's TodoList</h2>
      <form onSubmit={searchhandler}>
      <input placeholder='find and delete' className='border-2 p-2 m-3' value={search}
       onChange={(e)=>{
         setsearch(e.target.value)
      }}></input>
      <button className='bg-red-500 rounded p-2 text-white font-bold'>Delete</button>
      </form>
      <form onSubmit={submithandler}>
        <input type='text' value={task} placeholder='Enter the title' className='outline border-2 mx-4 rounded-lg border-zinc-800 p-2 text-2xl m-3'
         onChange={(e)=>{
            // console.log(e.target.value)
            settask(e.target.value)
        }}></input>
        <input type='text' value={description}
         onChange={(e)=>{
          // console.log(e.target.value)
          setdescription(e.target.value)
        }} 
        placeholder='Enter the description here' className='outline border-2 mx-4 rounded-lg border-zinc-800 p-2 text-2xl m-3'></input>
        <button className='bg-black text-3xl text-sans text-white p-2 rounded-lg'>Add Task</button>
      </form>
      <hr></hr>
      <div className='bg-slate-400 p-6'>
         {/* <ul className={`${display}`}>{rendertask}</ul> */}
         {

         mainTask.length>0? mainTask.map((ele,i)=>{
            return <div key={i} className='m-4 flex justify-between'>
            <div className='flex flex-col'>
      <div className="title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        {ele.task}
      </div>
      <div className="description" style={{ fontSize: '16px', color: '#555' }}>
        {ele.description}
      </div>
    
    </div>
    <button className='rounded-lg text-xl p-3 font-bold bg-red-500 fill-red-500 h-10 ' 
    onClick={()=>{
      deletehandler(i)
    }}>Delete</button>
    <hr></hr></div>
          }):<h1>No Tasks Yet</h1>
         }
      </div>
    <div>
      {name}
    </div>
    </div>
  )
}

export default page
