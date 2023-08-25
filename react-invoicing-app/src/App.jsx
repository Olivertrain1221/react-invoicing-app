import React, {useState} from 'react'
import ButtonOne from './components/buttons/buttonOne/buttonOne.jsx'
import ButtonTwo from './components/buttons/buttonTwo/buttonTwo.jsx'
import ButtonThree from './components/buttons/buttonThree/buttonThree.jsx'
import ButtonFour from './components/buttons/buttonFour/buttonFour.jsx'
import DeleteButton from './components/buttons/deleteButton/deleteButton.jsx'
import AddItemButton from './components/buttons/addItemButton/addItemButton.jsx'
import TextField from './components/formElements/textField/textField.jsx'
import './App.css'
import './assets/typography/typography.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  return (
    // OUTER APP CONTAINER
    <div className={`${isDarkMode ? 'dark' : ''} flex flex-col items-center gap-24 bg-red-60`}>
    {/* NIGHT MODE TOGGLER */}
    <button className="bg-black text-white rounded-lg p-4" onClick={toggleDarkMode}>Night/day</button>
    {/* Button DIV */}
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-3xl'>BUTTONS</h1>
      <ButtonOne type="text" text="New Invoice" />
      <ButtonTwo type="text" text="Mark as Paid" />
      <ButtonThree type="text" text="Edit" />
      <ButtonFour type="text" text="Save as Draft" />
      <DeleteButton type="text" text="Delete" />
      <AddItemButton type="text" text="+ Add Item" />
    </div>

    <div className='flex flex-col items-center gap-4'>
      <h2 className='text-3xl'>FORM ELEMENTS</h2>
      <TextField labelText="Street Address"/>

    </div>
    
    </div>
    
  ) 
} 

export default App
