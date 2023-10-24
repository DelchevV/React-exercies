
import './App.css';

import { Player } from './User'

function App() {
  const names = ['Pedro', 'Jake', 'jessica', 'Mike', 'Dustin'];
  const players = [
    { name: 'Pedro', age: 12 },
    { name: 'Ivan', age: 16 },
    { name: 'Mike', age: 22 },
  ]

  const planets = [
    {name: 'Mars' , isGasPlanet: false},
    {name: 'Earth' , isGasPlanet: false},
    {name: 'Jupiter' , isGasPlanet: true},
    {name: 'Venus' , isGasPlanet: false},
    {name: 'Neptune' , isGasPlanet: true},
    {name: 'Uranus' , isGasPlanet: true},
  ]
  return (

    <div className="App">
      {planets.map((value,key)=>{
         return value.isGasPlanet && <Planet name={value.name} />
      })}
    </div>
  );
}
const Planet=(props)=>{
  return(
    <div>
      <h1>{props.name} is gas planet</h1>
    </div>
  )
}

export default App;
