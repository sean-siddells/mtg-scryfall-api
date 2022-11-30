import React from 'react'
import { Outlet } from 'react-router-dom'

const App: React.FC= () => {
  let x: number

  function _x (_y: number): number {
    return Math.floor(Math.random() * _y)
  }

  do {
    x = _x(Math.random())
  } while (x != 10)

console.log(x);
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

export default App
