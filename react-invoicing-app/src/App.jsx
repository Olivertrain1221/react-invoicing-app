import React, {useState} from 'react'
import ButtonOne from './components/buttons/buttonOne/buttonOne.jsx'
import ButtonTwo from './components/buttons/buttonTwo/buttonTwo.jsx'
import ButtonThree from './components/buttons/buttonThree/buttonThree.jsx'
import './App.css'
import './assets/typography/typography.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>

    <div className='flex flex-col items-center gap-4 bg-red-60'>
    <button onClick={toggleDarkMode}>Night/day</button>
    <ButtonOne type="text" text="New Invoice" />
    <ButtonTwo type="text" text="Mark as Paid" />
    <ButtonThree type="text" text="Edit" />
    <div></div>
    </div>
    </div>
    
  ) 
} 

export default App
