

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
      
          setCoin(prevCoin => prevCoin + 6000000);
      };

      const deductCoinByAddingPlayer = (price)=>{
        if(price<=coin && coin > 0)
        {
          const remainingPrice = coin - price;
          setCoin(remainingPrice);
        }
        else{
          return;
        }
      
      }
  

  const [addedPlayer , setAddedPlayer] = useState([]);

  const [isAvailable, setIsAvailable] = useState(true);

  // const categoryEventHandle = (isAvailable)=>{

  //   setIsAvailable(isAvailable);

  // }


  const addPlayerHandler = (player)=>{
    const isExist = addedPlayer.find(PL=>PL.id==player.id);
    deductCoinByAddingPlayer(player.price)
   if(addedPlayer.length<6){
    if(coin>=player.price)
      {
       if(!isExist){
         const newplayer = [...addedPlayer,player];
         setAddedPlayer(newplayer);
       }
      
       else{
         alert("Already exist")
       }
      }
      else{
       alert("Not enough money")
      }            
   
     }
     else{
      alert("Maximum Player Added")
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
