import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  const [var1, setvar1] = useState()
  const [var2, setvar2] = useState()
  const [operation, setoperation] = useState("add")
  const [result, setResult] = useState(null)
  const performTask = () => {
  
    const v1 = Number(var1);
    const v2 = Number(var2);

    switch (operation)
    {
      case "add":
        setResult(v1+v2)
        break
      case "sub":
        setResult(v1-v2)
        break
      case "mul":
        setResult(v1*v2)
        break
      case "div":
        setResult(v1/v2)
        break
      default:
        setResult("error")
    }
  
  }
 
  return (
    <>
      <div className="p-4 border rounded bg-light d-flex gap-4 mb-3">

        <input type='number' value={var1} onChange={(e)=>setvar1(e.target.value)}></input>

        <select value={operation} onChange={(e)=>setoperation(e.target.value)}>
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="mul">x</option>
          <option value="div">/</option>
        </select>

        <input type='number' value={var2} onChange={(e)=>setvar2(e.target.value)}></input><br>
        </br>
      
      </div>
      <button onClick={performTask} className='btn btn-primary'>Click</button>
      <div>Result : {result}</div>
    </>
  )
}

export default App
