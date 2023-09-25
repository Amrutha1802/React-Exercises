import './App.css';
//import Counter from './Counter.js'
import ListView from './ListView';
import Greetings from './Greetings.js';
import SignUpForm from './SignUpForm';
import Parent from './Day2.js';
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
        <SignUpForm/>
      </div>
      <div>
        <Parent/>
      </div>
    </div>
  );
}
export default App;
