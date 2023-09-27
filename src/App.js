import './App.css';
import ListView from './ListView';
import Greetings from './Greetings.js';
import Counter from './Counter.js'
import SignUpFormUsingSwitch from './Day-5.js';
function App() {
  return (
    <div className="App">
      <div>
        <Greetings name="Amrutha"/>
      </div>
      <div>
        <ListView start={5} end={15}/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <SignUpFormUsingSwitch/>
      </div>
    </div>
  );
}
export default App;