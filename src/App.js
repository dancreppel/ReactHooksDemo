import './App.css';
import Counter from './useStateDemo/Counter';
import AlertCounter from './useEffectDemo/AlertCounter';
import Countdown from './useEffectDemo/Countdown';

function App() {
  return (
    <div className="App">
      <Counter />
      <AlertCounter />
      <Countdown />
    </div>
  );
}

export default App;
