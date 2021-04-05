import { React, useState } from 'react'
import logo from './logo.svg'
import NavBar from './components/NavBar/navBar'
import CardSelect from './components/CardSelect/cardSelect'
import TextInput from './components/TextInput/textInput'

const Images = ["./0.jpg", "./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg" ]


const App = () => {
  
  const [index, setIndex] = useState(null)
  const [page, setPage] = useState("Home")

  return [
    <NavBar/>,
    <CardSelect images={Images} page={page} setPage={setPage} setIndex={setIndex}/>,
    <TextInput page={page} index={index}/>
  ]
}

export default App;
