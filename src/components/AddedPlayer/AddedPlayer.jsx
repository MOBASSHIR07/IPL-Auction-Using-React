import React from 'react';
import ShowAddedPlayer from '../ShowAddedPlayer/ShowAddedPlayer';


const AddedPlayer = ({addedPlayer, removeButtonhandle}) => {




    return (
        <div>
            {
                addedPlayer.map(player =><ShowAddedPlayer key={player.id
        
                } player={player}  removeButtonhandle={ removeButtonhandle}></ShowAddedPlayer>)
               
            }
        </div>
    );
};

export default AddedPlayer;