import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/books';
import Categories from './components/categories';
import './App.css';
import styles from './css/layout.module.css';
import BookForm from './components/bookInput';

function Layout() {
  return (
    <header className={styles.appHeader}>
      <h1 className={styles.titleText}>Bookstore CMS</h1>
      <nav className={styles.navLinks}>
        <Link to="/">BOOKS</Link>
        <Link to="/categories" className={styles.disable}>CATEGORIES</Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <BookForm />
    </div>
  );
}

export default App;
