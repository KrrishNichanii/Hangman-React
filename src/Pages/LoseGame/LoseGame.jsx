import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hangman from '../../Components/Hangman/Hangman'


function LoseGame() {
    const navigate = useNavigate() ; 
    const locator = useLocation() ; 
  return (
    <>
        <div className="bg-red-300 w-full h-screen flex justify-center items-center gap-[4rem]">
          
          <div className="">
            <div className='text-6xl text-white '>Game Lost </div>
            <button className='mx-auto mt-6 ml-32 px-2 py-1 bg-orange-800 rounded-md text-white hover:bg-orange-600' onClick={() => navigate('/start',{state:{scoreToAdd:0,score:locator?.state?.score}, replace: true})}>Try Again</button>
          </div>
          <div className="">
             <Hangman steps={7}/>
          </div>
      </div>
    </>
  )
}

export default LoseGame