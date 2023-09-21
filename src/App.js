import './App.css';
import ListView from './ListView';
import Greetings from './Greetings.js'
function App() {
  const list=[1,2,3,4,5,6,7,8,9,10];
  return (
    <div>
    <div className="App">
    <Greetings name="Amrutha"/>
    </div>
    <div className="App">
      <ListView list={list}/>
        </div>
    </div>
  );
}
export default App;
