import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Data from './components/Data'
function App() {
  
  const data = Data.map(item =>{
   return (
      <Card  
      key = {item.id}
      item = {item}
      />
    )})
  return (
    <div className="App">
    <Navbar /> 
    {data}
    
    </div>
  )
}

export default App
