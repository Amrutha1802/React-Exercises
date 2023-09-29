import { createContext, useState } from 'react';
const LevelContext=createContext();
export function MyContextProvider({children}){
    const [switchToggle,setSwitchToggle]=useState(true);
    function handleSwitchToggle(){
        setSwitchToggle(!switchToggle);
    }
    return (
        <LevelContext.Provider value={{switchToggle,setSwitchToggle,handleSwitchToggle}}>
            {children}
        </LevelContext.Provider>
    )
}
export default LevelContext;
