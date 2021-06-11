import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-100 pl-6">
    <div className="flex items-center justify-between flex-wrap">
      <div className="block">
        <Link to="/"><img src="https://i.ibb.co/zH7yDKb/logo.png" alt="" width="400px"/></Link>
      </div>
      <nav className="block">
        <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Home</span></Link>
        <Link to="/about"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">About</span></Link>
        <Link to="/contact"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Contact</span></Link>
      
      </nav>
    </div>
  </header>
);

export default Header;
