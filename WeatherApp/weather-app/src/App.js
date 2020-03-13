import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Bogotá,co',
  'Buenos Aires,ar',
  'mecca,sa',
  'Oslo,no',
  'Mogadiscio,so'
];

function App() {
  return (
    <div className="App">
      <LocationList cities={ cities }/>
    </div> 
  );
}

export default App;
