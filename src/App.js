import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Recipes from './components/recipes/Recipes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/:link" element={<Recipes />} /> 
     </Routes>
    </div>
  );
}

export default App;
