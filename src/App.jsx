
import './App.css'
import { add, diff } from './utile/math/math'

function App() {
  
  const sum = add(4, 6)
 
  const sub = diff(34, 12)
   console.log(sum,sub)
 
  return (
    <>
    
      <h1>Vite + React</h1>
  
    </>
  )
}

export default App
