import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(1)
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setCount( c => c-1)}>-</button>
        <h3>{count}</h3>
      <button onClick={() => setCount( c => c+1)}>+</button>

      <div>
        <button onClick={() => setOpen(p => !p)}>{`Modal ${isOpen ? 'OFF' : 'ON'}`}</button>
        {isOpen && <div>This is Modal</div>}
      
      </div>
    </div>
  )
}

export default App