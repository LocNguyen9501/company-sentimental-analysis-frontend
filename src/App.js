import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './componenets/NavBar';
import { HomePage } from './pages/homepage/homepage';
import { Item } from './pages/item/item';
import { ItemSearch } from './pages/item/ItemSearch';
import { Provider } from "react-redux";
import store from "./store/index"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/company-details/:name" element={<Item />}/>
            <Route path="/company-search-details/:name" element={<ItemSearch />}/>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
