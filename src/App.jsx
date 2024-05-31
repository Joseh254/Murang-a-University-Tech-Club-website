
import './App.css'
import Login from './Login'


function Myfirstcomponent(){
  return(
    <div>
      <h1>This is a component</h1>
    </div>
  )
}

function Greet(username){
  if (username = "")

    {return(<h1>Welcome guest</h1>)}
      

    else{
      return(<h1>Welcome {username}</h1>)
    }
  
}

function App() {

  return (
    <>
<h1>Hello world!</h1>
<Myfirstcomponent/>
<Login Isloggedin ={true}/>
<Greet username =""/>

    </>
  )
}

export default App
