import logo from './logo.svg';
import './App.css';
import FirstPage from './components/FirstPage';
import Card from './components/Card';
import LastPage from './components/LastPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FirstPage} />
      <Route path="/card" component={Card} />
      <Route path="/lastpage" component={LastPage} />
    </div>
  );
}

export default App;
