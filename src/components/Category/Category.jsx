import React, { useState } from 'react';

const Category = () => {
    const [isAvailable, setIsAvailable] = useState(true);

    return (
        <div>
            <div className='flex justify-between mb-4 ml-4'>
                <h1 className="text-xl font-bold">{isAvailable ? 'Available' : 'Selected'}</h1>
                <div className='flex gap-4'>
                    <button
                        onClick={() => setIsAvailable(true)}
                        className={`${isAvailable ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} font-bold py-2 px-6 rounded-full transition duration-300`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setIsAvailable(false)}
                        className={`${!isAvailable ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} font-bold py-2 px-6 rounded-full transition duration-300`}
                    >
                        Selected
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Category;