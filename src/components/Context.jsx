import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [theme,setTheme]=useState(true)
    
  return (
    <Context.Provider value={{theme,setTheme}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
