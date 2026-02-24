import React from 'react'
import ReactDOM from 'react-dom/client'
import ThreeDCanvas from './ThreeDCanvas'
import UI from './UI'
import { ThreeDSceneProvider } from './context/ThreeDSceneContext'

function App() {
  return (
    <ThreeDSceneProvider>
      <ThreeDCanvas />
      <UI />
    </ThreeDSceneProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)