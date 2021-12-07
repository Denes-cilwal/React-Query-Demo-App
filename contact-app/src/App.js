import './App.css';
import { AddContact } from './components/AddContact';
import { Header } from './components/Header';
import React from "react"

function App() {

    return (
    <div className="ui container">
      <Header />
      <AddContact />
     
    </div>
  );
}

export default App;
