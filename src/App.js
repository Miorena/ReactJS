import React from "react";
import './App.css';
import  Formulaire from "./Formulaire";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-3xl font-bold text-center py-10">📝 Formulaire React</h1>
      <Formulaire />
    </div>
  );
}

export default App;
