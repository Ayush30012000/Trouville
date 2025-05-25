import React from 'react'
import { AppContext } from './AppContext';
import { useContext } from 'react';
import ButtonComp from './Button';
const Home = () => {
    const { state,dispatch } = useContext(AppContext);
  return (
    <div style={{
        backgroundColor: state?.isDarkMode ? 'blue' : 'red',
        width: '100vh',
        height: '100vh',
      }}>
        <ButtonComp />
      </div>
  )
}

export default Home