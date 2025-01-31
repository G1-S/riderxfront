import React from 'react';
import index from '../../index.css';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-ping">
      <span className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-pulse">
        Mozart é brabo!!!
      </span>
    </div>
  );
}

export default Home;
