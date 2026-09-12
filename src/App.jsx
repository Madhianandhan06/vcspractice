import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(1)
  return (
    <div>
      <button onClick={() => setCount( c => c-1)}></button>
        <h3>{count}</h3>
      <button onClick={() => setCount( c => c+1)}></button>
    </div>
  )
}

export default App