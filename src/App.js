import './App.css';
import Greetings from './components/Greetings.js';
import Counter from './components/Counter.js'
import SignUpFormUsingSwitch from './components/Day-5.js';
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="App">
      <div>
           <Navbar/>
            <Routes>
                <Route path='/home/:username' element={ <Greetings username="Amrutha"/>}>
                </Route>
                <Route path='/login' element ={ <SignUpFormUsingSwitch/> }>
                </Route>
                <Route path='/counter' element={ <Counter/> }>
                </Route>
            </Routes>
         </div>
    </div>
  );
}
export default App;