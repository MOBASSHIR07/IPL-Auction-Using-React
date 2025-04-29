import React, { useEffect, useState } from 'react';
import Showcard from '../Showcard/Showcard';
 

const Datafatcher = ({addPlayerHandler}) => {


    const [fetchedData , setFetchdata]= useState([]);
    
   


    useEffect(() => {
        fetch('/fakeData.json')
          .then(res => res.json())
          .then(data =>setFetchdata(data))
      }, []);
      
    return (
        <div  className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-gray-100 min-h-screen">
            {
            fetchedData.map(player => <Showcard key={player.id} player={player} addPlayerHandler={addPlayerHandler}  ></Showcard>)

            }
        </div>
    );
};

export default Datafatcher;