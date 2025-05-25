import React from 'react'
import { AppContext } from './AppContext';
import { useContext } from 'react';
const ButtonComp = () => {
    const { state,dispatch } = useContext(AppContext);
    
  return (
    <div
    >
      <h1
        style={{
          color: state?.isDarkMode ? 'white' : 'black',
          fontSize: '24px',
        }}
      >
        Hello World
      </h1>
      <h1>Count: {state.count}</h1>
      <p>Click the buttons to increment or decrement the count.</p>
      <button
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'lightgray',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
      <button
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'lightgray',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'decrement' })}
        // onClick={decrement}  
        
      >
        Decrement
      </button>
      <button
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: state?.isDarkMode ? 'black' : 'white',
          color: state?.isDarkMode ? 'white' : 'black',
          border: '1px solid gray',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggledarkmode' })}
        // onClick={toggleDarkMode}
      >
        {state?.isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default ButtonComp;