import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function StartGame() {
  const themes = [{text:'Choose Theme',msg:'Choose Theme'},{text:'Food',msg:'Food 🍔' }, {text: 'Animals',msg:"Animals 🦁"} , {text:'Movies',msg:"Movies 🎥"}] ; 
  const difficulties = [{text:'Choose Difficulty',score:null } ,{text:'Easy',score:1, color:"bg-green-100"} , {text:'Medium',score:2, color:"bg-yellow-100"} ,{text:'Hard',score:3, color:"bg-red-200"} ]; 
  
  const  [theme , setTheme] = useState("") ; 
  const [difficulty , setDifficulty] = useState("") ; 
  const [score , setScore] = useState(0) ; 

  const navigate = useNavigate() ; 
  const locator = useLocation() ; 

  useEffect(() => {
    console.log('Loc state ',locator?.state);
    console.log('Loc score',locator?.state?.score);
    console.log('Loc score to add',locator?.state?.scoreToAdd);
    if(locator?.state?.scoreToAdd){
      setScore(locator?.state?.score + locator?.state?.scoreToAdd) ; 
    }
  },[])

  const handleSubmit = (e) => {
     e.preventDefault()  ;
     if(!theme){
      alert("Select a theme") ;
      return  ; 
     } 

     if(!difficulty){
      alert("Select a difficulty") ;
      return  ; 
     } 

     navigate('/play',{state:{theme , score,difficulty}}) ; 
  }
  return (
    <div className='w-full h-screen bg-red-300 flex justify-center pt-14'>
      <div className="">
        <h1 className='text-5xl font-semibold text-white mb-6'>Welcome to Hangman</h1>
        <p className='text-xl text-white'>Score :  {score}</p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label htmlFor="theme" className='mr-[2.8rem] font-semibold text-xl text-white'>Select Theme</label>
            <select className='px-2 py-1 rounded-md' id='theme' name='theme' onChange={(e) => setTheme(e.target.value)}>
              {
                themes?.map(theme => (
                <option key={theme.text} value={theme.text}>
                    {theme.msg}
                </option>
                )
                )
              }
            </select>
          </div>
          <div className="space-y-4">
            <label htmlFor="difficulty" className=' mr-[2rem] font-semibold text-xl text-white' name="difficulty" id="difficulty"> Select Difficulty</label>
              <select className='px-2 py-1 rounded-md' onChange={(e) => setDifficulty(e.target.value)}>
                {
                  difficulties?.map(difficulty => (
                  <option key={difficulty.text} value={difficulty.text} className={`${difficulty.color}`}>
                      {difficulty.text} {" "} {difficulty.score}
                  </option>
                  )
                  )
                }
              </select>
          </div>

          <button type='submit' className='bg-slate-400 mt-[2rem] p-2 rounded-lg hover:bg-slate-200 ml-[10rem]'>Start Game</button>
        </form>
      </div>
    </div>
  )
}
