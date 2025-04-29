

import { useState } from 'react'
import './App.css'
import Category from './components/Category/Category'
import Datafatcher from './components/Datafatcher/Datafatcher'
import './components/Header/Header'
import Header from './components/Header/Header'
import AddedPlayer from './components/AddedPlayer/AddedPlayer'

function App() {

  const [addedPlayer , setAddedPlayer] = useState([]);


  const addPlayerHandler = (player)=>{
    console.log('Received player:', player);
const newplayer = [...addedPlayer,player];
setAddedPlayer(newplayer);

  }

  const removeButtonhandle = (playerCard)=>{

    const remainingPlayer = addedPlayer.filter(PR=>PR.id !== playerCard.id)
    setAddedPlayer(remainingPlayer) 



  }
  

  return (
    <>
    <Header></Header>
    <Category></Category>
<Datafatcher addPlayerHandler ={addPlayerHandler} ></Datafatcher>
<AddedPlayer addedPlayer={addedPlayer} removeButtonhandle={removeButtonhandle}></AddedPlayer>
    
    </>
  )
}

export default App
