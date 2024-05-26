import './App.css';
import Counter from './components/counterRedux';
import ArrStateComponet from './components/firstBlock';
import SecondBlock from './components/secondBlock';

function App() {
  return (
    <div className="App">
      <Counter />
      <ArrStateComponet />
      <SecondBlock />
    </div>
  );
}

export default App;
