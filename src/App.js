import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './componenets/NavBar';
import { HomePage } from './pages/homepage/homepage';
import { Item } from './pages/item/item';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/item" element={<Item />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
