
import './App.css'
import Login from './Login'


function Myfirstcomponent(){
  return(
    <div>
      <h1>This is a component</h1>
    </div>
  )
}

function Greet({username}){
  if (username ===undefined)

    {return(<h1>Welcome guest</h1>)}
      

    else{
      return(<h1>Welcome {username}</h1>)
    }
  
}

const Play_video = ({age})=>
  {
  if(age>=18) {
    return(<p>you cannot play this video</p>)
  }
  else{
    return(<p>play video</p>)
  }
}

function App() {

  return (
    <>
<h1>Hello world!</h1>
<Myfirstcomponent/>
<Login Isloggedin ={true}/>
<Greet username="joseph"/>
<Play_video age ={20}/>

    </>
  )
}

export default App
