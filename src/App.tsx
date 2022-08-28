import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, message } from 'antd'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="flex w-full justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <Button type="primary" onClick={() => message.info('This is a normal message')}>
        Button
      </Button> */}
    </div>
  )
}

export default App
