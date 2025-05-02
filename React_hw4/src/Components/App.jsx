import { useState } from 'react'
import CitySelcetor from './CitySelcetor';
import CityCards from './CityCards';

function App() {
const [selectedCity, setSelectedCity]=useState(null);
const updateCity = (newCity)=>{
  setSelectedCity(newCity)
}
  return (
    <>
      <CitySelcetor updateCity={updateCity}/>
      {selectedCity && <CityCards city={selectedCity}/>}
    </>
  )
}

export default App
