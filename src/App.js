import './App.css'
import React, { useState, useEffect} from 'react'
import Client from './Components/Client'
import Loading from './Components/Loading'

const App = () => {

  const [data, setData] = useState(null)
  const [loader, setLoader] = useState(false)
  const [showClient, setShowClient] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchData = () => {
    fetch("https://api/clients?search=AMIT-A-FELHASZNÁLÓ-ÍRT")
    .then((response) => response.json())
    .then((data) => {setData(data)})
  }

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <input placeholder='Search...'></input>
      <button onClick={setButtonClicked(!buttonClicked)}>Search</button>
      
      {buttonClicked && (
       <div>
         {data.map((client, i) => <Client client={client} key={i} />)}
       </div>)}
      <Loading />
    </div>
  )
}

export default App
