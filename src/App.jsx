import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import Datafatcher from './components/Datafatcher/Datafatcher';
import AddedPlayer from './components/AddedPlayer/AddedPlayer';
import Footer from './components/Footer/Footer';

function App() {
  const [coin, setCoin] = useState(0);
  const [addedPlayer, setAddedPlayer] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);

  const claimFreecoin = () => {
    setCoin(prev => prev + 6000000);
    toast.success('Added 6,000,000 coins!', {
      className: 'bg-green-500 text-white font-bold',
      duration: 3000,
    });
  };

  const deductCoinByAddingPlayer = (price) => {
    if (price <= coin && coin > 0) {
      setCoin(coin - price);
    }
  };

  const addPlayerHandler = (player) => {
    const isExist = addedPlayer.find(p => p.id === player.id);
    
    if (addedPlayer.length >= 6) {
      toast.error('Maximum 6 players allowed!', {
        className: 'bg-red-500 text-white font-bold',
      });
      return;
    }
    
    if (coin < player.price) {
      toast.error('Not enough coins!', {
        className: 'bg-red-500 text-white font-bold',
      });
      return;
    }
    
    if (isExist) {
      toast('Player already in team', {
        icon: '⚠️',
        className: 'bg-yellow-500 text-white font-bold',
      });
      return;
    }
    
    deductCoinByAddingPlayer(player.price);
    setAddedPlayer([...addedPlayer, player]);
    toast.success(`${player.name} added!`, {
      className: 'bg-green-500 text-white font-bold',
    });
  };

  const removeButtonhandle = (player) => {
    setAddedPlayer(addedPlayer.filter(p => p.id !== player.id));
    toast(`${player.name} removed`, {
      icon: '🗑️',
      className: 'bg-blue-500 text-white font-bold',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Toaster with top-center positioning */}
    <Toaster
      position="top-center"
      toastOptions={{
        className: 'text-center', 
        style: {
          margin: '0 auto',
          maxWidth: 'max-content',
        },
      }}
    />
      <Header coin={coin} claimFreecoin={claimFreecoin} />
      
      <div className="container mx-auto px-4 py-8 mb-20">
        <Category showplayerReport={addedPlayer.length} setIsAvailable={setIsAvailable} isAvailable={isAvailable} />
        
        <div className="mt-8">
          {isAvailable ? (
            <Datafatcher addPlayerHandler={addPlayerHandler} />
          ) : (
            <AddedPlayer 
              setIsAvailable={setIsAvailable}
              addedPlayer={addedPlayer}
              removeButtonhandle={removeButtonhandle}
            />
          )}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;