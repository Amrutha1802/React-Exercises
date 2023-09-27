import { useContext } from 'react';
import LevelContext from './LevelContext.js';
export default function ToggleSwitch ({label}){
    const { switchToggle,handleSwitchToggle }=useContext(LevelContext);
    return (
        <div className="switch-button">
        <label>
            <button onClick={handleSwitchToggle}>{switchToggle?'Hide Input Field':'Show Input field '}</button>
        </label>
        </div>
    );
};