import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function WinGame() {
    const navigate = useNavigate() ; 
    const locator = useLocation() ; 
    const diff = locator?.state?.difficulty ; 
    const toAdd = diff == 'Easy' ? 1 : diff == 'Hard' ? 3 : 2 ; 
    // useEffect(()=>{
    //   console.log('Score in win ',);
    // },[])
  return (
    <>
      <div className="bg-red-300 w-full h-screen flex justify-center items-center">
          
          <div className="">
            <div className='text-6xl text-white '>Game Winner + {toAdd}</div>
            <button className='mx-auto mt-6 ml-32 px-2 py-1 bg-orange-800 rounded-md text-white hover:bg-orange-600' onClick={() => navigate('/start',{state:{scoreToAdd:toAdd,score:locator?.state?.score}, replace: true })}>Play Again</button>
          </div>
      </div>
    </>
  )
}

export default WinGame