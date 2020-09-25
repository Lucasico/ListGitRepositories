import React from 'react';
import SeachUser from './Components/SearchUser/SeachUser';
import Repositories from './Components/Repositories/Repositories';
import './App.css';

function App() {
  return (
    <div className="flex-container">
      <section>
         <SeachUser />
      </section>
         <Repositories />
    </div>
  );
}

export default App;
