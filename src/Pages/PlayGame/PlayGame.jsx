import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hangman from '../../Components/Hangman/Hangman';
import { isWin, selectMaskedText } from '../../Components/MaskedText/MaskedTextUtility';
import MaskedText from '../../Components/MaskedText/MaskedText';
import LetterButtons from '../../Components/LetterButtons';

function PlayGame() {
  const [steps , setSteps] = useState(0) ; 
  const locator = useLocation() ; 
  const [word , setWord] = useState("") ; 
  const [markedLetters , setMarkedLetters] = useState([]) ; 
  const navigate = useNavigate() ; 
  // console.log(locator?.state);

  useEffect(() => {

   const {word , markedLetters} = selectMaskedText(locator?.state?.theme ,locator?.state?.difficulty)
   setWord(word) ; 
   setMarkedLetters(markedLetters) ; 
   console.log(word);
   console.log(markedLetters);
   console.log('Score in play game ' , locator?.state?.score);
  },[])

  const onLetterClick = (character) => {
    if(!word?.toUpperCase()?.includes(character)){
       setSteps(steps+1) ; 
       console.log('Wrong');
    }

    setMarkedLetters((prevMarkedLetters) => {
      const newMarkedLetters = [...prevMarkedLetters, character];
  
      if (isWin(word, newMarkedLetters)) {
        // const diff  = locator?.state?.difficulty ; 
        // const toAdd = diff == 'Easy' ? 1 : diff == 'Hard' ? 3 : 2 ; 
        // locator?.state?.setScore(state => state + toAdd) ; 
        navigate('/win',{state:{difficulty:locator?.state?.difficulty,score:locator?.state?.score},replace:true});
      } else if (steps + 1 >= 7) {
        navigate('/loss');
      }
  
      return newMarkedLetters;
    });

  }

  return (
    <div className='bg-red-300 w-full h-screen flex justify-center'>
      <div className="w-[80%] flex flex-col mt-[6rem]">
         <h1 className="text-center text-4xl font-semibold text-white mb-[2rem]">Theme {locator?.state?.theme}</h1>
        <MaskedText text = {word} usedLetters = {markedLetters} />
        <div className="flex justify-between gap-[3rem] items-center">
          <div className="basiss-2/4">
              <LetterButtons  text={word} usedLetters={markedLetters} onLetterClick={onLetterClick} />
          </div>
          <div className="basis-2/4 flex justify-center items-center">
              <Hangman steps={steps}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayGame