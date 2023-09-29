import { NavLink } from 'react-router-dom'
import './Home.css'
import Greetings from './Greetings.js';
import Counter from './Counter.js'
import SignUpFormUsingSwitch from './Day-5.js';
import { Routes, Route} from 'react-router-dom'

export default function Home(){
    return (
        <div>
           <nav>
                <NavLink to='/home/:username'>Greetings</NavLink>
                <NavLink to='/login'>Sign-up form</NavLink>
                <NavLink to='/counter'>Counter</NavLink>
            </nav>
            <Routes>
                <Route path='/home/:username' element={ <Greetings name="Amrutha"/>}>
                </Route>
                <Route path='/login' element ={ <SignUpFormUsingSwitch/> }>
                </Route>
                <Route path='/counter' element={ <Counter/> }>
                </Route>
            </Routes>
         </div>
    )
}