import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PlayGame from './Pages/PlayGame/PlayGame'
import StartGame from './Pages/StartGame/StartGame'
import LoseGame from './Pages/LoseGame/LoseGame'
import WinGame from './Pages/WinGame/WinGame'


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate() ; 

  useEffect(() => {
    navigate('/start') ; 
  },[])
  
  return (
    <>
    <Routes>
      <Route path="/play" element={<PlayGame/>} />
      <Route path="/start" element={<StartGame/>}/>
      <Route path="/loss" element={<LoseGame/>}/>
      <Route path="/win" element={<WinGame/>}/>
      <Route path="*" element={<h1>404 Page Not Found</h1>}/>
    </Routes>
    </>
  )
}

export default App
