import './App.css';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import Counter from './components/reduxComp/counterRedux';
import ArrStateComponet from './components/reduxComp/firstBlock';
import SecondBlock from './components/reduxComp/secondBlock';
import Navbar from './components/Routes/routerLink';

function Home() {
  return <h2>Home Page</h2>;
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Stats() {
  return <h3>Stats Page</h3>;
}

function Settings() {
  return <h3>Settings Page</h3>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/a" element={<Counter />} />
          <Route path="/b" element={<ArrStateComponet />} />
          <Route path="/c" element={<SecondBlock />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
