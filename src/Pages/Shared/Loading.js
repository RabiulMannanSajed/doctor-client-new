import React from 'react';

const Loading = () => {
    return (
        // <div className=" h-screen flex justify-center items-center">
        //     <button className="btn loading"></button>
        // </div>
        <div className="flex h-screen items-center justify-center space-x-2 animate-pulse">
            <div className="w-8 h-8 bg-red-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
        </div>
    );
};

export default Loading;