import './App.css';
import Greetings from './components/Greetings.js';
import Counter from './components/Counter.js'
import SignUpFormUsingSwitch from './components/Day-5.js';
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import DisplayJokes from './components/Day-6.js'
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import PostUsingMutation from './components/UseAddActivity';

const queryClient=new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Routes>
              <Route path='/home/:username' element={ <Greetings username="Amrutha"/>}>
              </Route>
              <Route path='/login' element ={ <SignUpFormUsingSwitch/> }>
              </Route>
              <Route path='/counter' element={ <Counter/> }>
              </Route>
          </Routes>
          <DisplayJokes/>
          <PostUsingMutation/>
        </QueryClientProvider>
    </div>
  );
}
export default App;