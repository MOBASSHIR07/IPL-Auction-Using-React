import React from 'react';
import { Trash2 } from 'lucide-react'; 

const ShowAddedPlayer = ({ player,   removeButtonhandle}) => {
  const { name, batting_style, image } = player;

  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-4 mb-4 shadow border">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-300 rounded-md flex-shrink-0">
          {image && <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{batting_style}</p>
        </div>
      </div>
      <button onClick={()=>removeButtonhandle(player)} className="text-red-500 hover:text-red-700 transition">
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default ShowAddedPlayer;
