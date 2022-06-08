import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Search from './components/search/Search';
import Random from './components/random/Random';
import Favorites from './components/favorites/Favorites';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/search" element={<Search />} />
       <Route path="/random" element={<Random />} />
       <Route path="/favorites" element={<Favorites />} /> 
       
     </Routes>
    </div>
  );
}

export default App;
