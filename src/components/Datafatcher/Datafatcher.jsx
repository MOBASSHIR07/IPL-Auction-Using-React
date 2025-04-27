import React, { useEffect, useState } from 'react';
 

const Datafatcher = () => {


    const [fetchedData , setFetchdata]= useState([]);


    useEffect(() => {
        fetch('/fakeData.json')
          .then(res => res.json())
          .then(data =>setFetchdata(data))
      }, []);
      
    return (
        <div>
            
        </div>
    );
};

export default Datafatcher;