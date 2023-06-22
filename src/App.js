import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/books'
import Categories from './components/categories'
import './App.css';

function Layout() {
  return (
    <header className="App-header">
    <h1>Bookstore CMS</h1>
    <nav className="navLinks">
      <Link to="/" element={<Home />} />
      <Link path="/categories" element={<Categories />} />
    </nav>        
  </header>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} >
          <Route path='/categories' element={<Categories />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
