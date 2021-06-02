import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Characters/>
      </div>
      
    </div>
  );
}

export default App;
