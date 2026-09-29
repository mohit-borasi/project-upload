import { useState } from "react";


function App(){
  const [color,setcolor1] = useState("")
  const [color2,setcolor2] = useState("")

  function onchange(){
    setcolor1("gray")
  }
  function onsecondchange(){
    setcolor2("aqua")
  }
  return(
    <>
    <button style={{backgroundColor:color}} onClick={onchange}>click</button>
    <button style={{backgroundColor:color2}} onClick={onsecondchange}>next</button>

    </>
  )
}
export default App