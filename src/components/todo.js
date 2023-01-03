import { useState, useEffect } from 'react'



const Todo=()=>{
    const [tasks,settasks]= useState([{nam:"sign in with google",comp:false},{nam:"enjoy",comp:false}])
    const [ntask,setntask]= useState()
    const subhand=(event)=>{
        event.preventDefault()
        settasks([...tasks,{nam:ntask,comp:false}])
        setntask("")
    }
    const subdel=(event)=>{
        event.preventDefault()
        settasks(tasks.map(item=>item.nam===event.target.attributes.t.value?{...item,comp:!item.comp}:item))


    }
    return (
        <div className="todo">

        <form type="submit" className="inputform" onSubmit={subhand}>
        <input type="text" value={ntask} onChange={(ef) => setntask(ef.target.value)}></input>
        <input type="submit"></input>
        </form>
        {tasks.map((task)=>(
            <div className='task' key={task.nam}>
            <h2 className="taskc">{task.nam} </h2>
            <h3>completed:{task.comp?"yes":"no"}</h3>
            <button t={task.nam} onClick={subdel}> toggle completetion </button>
            </div>
        ))}
        </div>
    )


}
export default Todo;