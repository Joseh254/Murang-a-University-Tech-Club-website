
import './App.css'
import Me from "./Me"
import Names from "./Names"

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
<Names names = "joseph"/>
<Names names = "mbugua"/>
    </>
  )
}

export default App
