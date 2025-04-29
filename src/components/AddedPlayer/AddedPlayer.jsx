import React from 'react';
import ShowAddedPlayer from '../ShowAddedPlayer/ShowAddedPlayer';


const AddedPlayer = ({addedPlayer, removeButtonhandle, setIsAvailable}) => (
    <div>
        <div>
            {addedPlayer.map(player => <ShowAddedPlayer key={player.id} player={player} removeButtonhandle={removeButtonhandle}></ShowAddedPlayer>)}
        </div>
        <div>
            <button onClick={()=>{setIsAvailable(true)}} className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-8 rounded-full transition duration-300'>Add Player</button>
        </div>
    </div>
);

export default AddedPlayer;