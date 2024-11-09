// import e from 'express';
"use client"
import React, { createContext} from 'react'
export const Name =createContext();
const Context = ({children}) => {
    const username ="Nagaraj Moger"
  return (
    <div>
      <Name.Provider value={username} >{children}</Name.Provider>
    </div>
  )
}

export default Context
