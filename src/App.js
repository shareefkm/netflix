import React from 'react';
import './App.css';
import NavBar from './Component/NaveBar/NavBar';
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';
import { actions , originals ,RomanceMovies , ComedyMovies} from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url = {originals} title='Netfilix Originals'/>
      <RowPost  url = {actions} title='Action' isSmall/>
      <RowPost  url = {RomanceMovies} title='RomanceMovies' isSmall/>
      <RowPost  url = {ComedyMovies} title='ComedyMovies' isSmall/>
    </div>
  );
}

export default App;
