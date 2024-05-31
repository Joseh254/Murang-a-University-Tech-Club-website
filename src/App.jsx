
import './App.css'
import Me from "./Me"

function Myfirstcomponent(){
  return(
    <div>
      <h1>This is a component</h1>
    </div>
  )
}

function App() {

  return (
    <>
<h1>Hello world!</h1>
<Myfirstcomponent/>
<Myfirstcomponent/>
<Myfirstcomponent/>
<Me/>
    </>
  )
}

export default App
