import React from 'react';

const Showcard = ({ player,addPlayerHandler }) => {
  const { id, name, country, role, batting_style, price, image } = player;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      
      <img
        src={image}
        alt={name}
        className="w-28 h-28 object-cover rounded-full border-4 border-gray-300 shadow-md"
      />

      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="w-full bg-gray-100 rounded-lg p-4 space-y-2 text-gray-700">
        <p><span className="font-semibold">ID:</span> {id}</p>
        <p><span className="font-semibold">Country:</span> {country}</p>
        <p><span className="font-semibold">Batting Style:</span> {batting_style}</p>
        <p><span className="font-semibold">Price:</span> ${price.toLocaleString()}</p>
      </div>

      <button onClick={()=>addPlayerHandler(player)} className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md">
        ➕ Add Player
      </button>
      
    </div>
  );
};

export default Showcard;
