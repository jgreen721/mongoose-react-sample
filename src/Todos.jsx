import React, {useEffect,useState} from 'react'


const TodoItem = (todo)=>{
    const [isFinished,setIsFinished] = useState(todo?.isFinished)
}

const Todos = () => {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4455/todos')
        .then(res=>res.json())
        .then(res=>{
          console.log("Res",res);
          setTodos(res.todos)
        })
    },[])
  return (
    <div>
      <div className="todos-header">
        <h1>Todos ({todos.length})</h1>
        {todos.map(t=>(
          <li className="todo-item" key={t._id}>
            <div className="item-col">
            <h3>{t.todo}</h3>
            <h5>{t.description}</h5>
            </div>
            <div className="item-col">
              <h4>Duration:{t.duration}</h4>
            </div>
            <div>
              <input type="checkbox" onChange={()=>setIsFinished((isFinished)=>isFinished = !isFinished)} />
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Todos