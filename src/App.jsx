import { useState, useEffect, useRef } from 'react'
import Todos from "./Todos"

import './App.css'


const AddTodo = ({setShowTodo,showTodo})=>{
  const formRef = useRef()

  const handleFormSubmit = (e)=>{
    e.preventDefault();

    console.log("form fired!")
  }

  return (
    <div className={showTodo ? "addtodo-container" : "addtodo-container hide-addtodo"}>
      <div className="addtodo-overlay"></div>
      <form onSubmit={handleFormSubmit} className="addtodo-form">
        <h2>Add a Todo</h2>
        <div className="form-row">
        <div className="form-div">
          <label htmlFor="addtodo">
            <h5>Add Todo</h5>
          </label>
          <input type="text" name="todo" className="form-control" placeholder="Add Todo" autoComplete="off" id="todo" />
        </div>
        <div className="number-form-div">
          <label htmlFor="score">
            <h5>Score:</h5>
          </label>
          <input type="number" min="1" max="10" step="1" defaultValue="5" name="score" className="number-input"/>
        </div>
        <div className="number-form-div">
  
        <label htmlFor="score">
           <h5> Estimated Time:</h5>
        </label>
          <input type="number" min="1" max="5" step="1" defaultValue="2" name="duration" className="number-input"/>
        </div>
        </div>
        <div className="form-div">
          <textarea name="description" className="description-input"  />
        </div>
        <div className="form-div">
          <button className="add-btn">Add Todo</button>
        </div>
        <div className="form-div">
          <input type="checkbox" onChange={()=>setShowTodo(showTodo=>showTodo=!showTodo)} />
        </div>
      </form>
    </div>
  )
}

function App() {
  const [user,setUser] = useState("Guest")
  const [showTodo,setShowTodo] = useState(false);


  useEffect(()=>{
    fetch('http://localhost:4455/api')
    .then(res=>res.json())
    .then(res=>{
      console.log("Res",res);
    })
  })

  return (
    <div className="app">
              <AddTodo setShowTodo={setShowTodo} showTodo={showTodo}/>
<div className={showTodo ? "app-content blur" : "app-content"}>
      <header>
        <h1>Mongo-Azure-Todos-App</h1>
        <small>Post from here. Fetch from there!</small>
      </header>
      <section className="main-section">
        <div className="small-column">
          <h4>Welcome {user}</h4>
          <div className="add-todo-toggle-div">
            <label htmlFor="showtodo">Add a todo</label>
            <input onClick={()=>setShowTodo(showTodo=>showTodo=!showTodo)} type="checkbox" />
          </div>
        </div>
        <div className="large-column">
          <Todos/>
        </div>
      </section>

      <footer>
        <strong>BratzAppz</strong>
        <ul className="links">
          <li className="link-item">
            <a href="#">Github</a>
          </li>
          <li className="link-item">
            <a href="#">LinkedIn</a>
          </li>
          <li className="link-item">
            <a href="#">Indeed</a>
          </li>
        </ul>
      </footer>
      </div>
    </div>
  )
}

export default App
