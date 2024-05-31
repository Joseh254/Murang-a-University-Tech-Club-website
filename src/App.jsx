
import './App.css'

function Student({fname,lname}){
return(
  <div>
    <h1>{fname} is his first name</h1>
    {lname && <a href={lname}>{lname} is his facebook name</a>}
  </div>
)
}

function App() {

  return (
    <>
<h1>Hello world!</h1>
<Student fname={'joseph'} lname={"mbugua"}/>


    </>
  )
}

export default App
