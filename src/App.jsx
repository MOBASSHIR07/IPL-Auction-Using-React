

import { useState } from 'react'
import './App.css'
import Category from './components/Category/Category'
import Datafatcher from './components/Datafatcher/Datafatcher'
import './components/Header/Header'
import Header from './components/Header/Header'
import AddedPlayer from './components/AddedPlayer/AddedPlayer'

function App() {


    const [coin,setCoin] = useState(0);
      const claimFreecoin = () => {
      
          setCoin(prevCoin => prevCoin + 60000000);
      };
  

  const [addedPlayer , setAddedPlayer] = useState([]);

  const [isAvailable, setIsAvailable] = useState(true);

  // const categoryEventHandle = (isAvailable)=>{

  //   setIsAvailable(isAvailable);

  // }


  const addPlayerHandler = (player)=>{
    const isExist = addedPlayer.find(PL=>PL.id==player.id);
    if(!isExist){
      const newplayer = [...addedPlayer,player];
      setAddedPlayer(newplayer);
    }
    else{
      alert("Already exist")
    }
               

  }



  const removeButtonhandle = (playerCard)=>{

    const remainingPlayer = addedPlayer.filter(PR=>PR.id !== playerCard.id)
    setAddedPlayer(remainingPlayer) 



  }
  

  return (
    <>
    <Header coin={coin} claimFreecoin={claimFreecoin}></Header>
    <Category setIsAvailable={setIsAvailable} isAvailable={isAvailable}></Category>
    <div>
      
    {
        isAvailable?<Datafatcher addPlayerHandler ={addPlayerHandler} ></Datafatcher>:<AddedPlayer addedPlayer={addedPlayer} removeButtonhandle={removeButtonhandle}></AddedPlayer>
      }
    </div>
    

    </>
  )
}

export default App
