import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/reduxComp/counterRedux';
import ArrStateComponet from './components/reduxComp/firstBlock';
import SecondBlock from './components/reduxComp/secondBlock';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
