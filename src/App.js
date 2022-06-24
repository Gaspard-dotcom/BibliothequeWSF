import "./App.css";

import React from 'react';


import Header from "./Header";

import Livres from "./Livres";
  
function App() {
  return (
    <div className="App">
     <Header />
     <Livres /> 

    </div>
    
   // Using the newly created Header 
   // component in this main component


  );
}
export default App;


