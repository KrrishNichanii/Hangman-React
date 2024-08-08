import { getAllCharacters } from "./MaskedTextUtility";

/**
 * 
 * @param {text} The word to be guessed 
 * @param {usedLetters} The array of letters that have been guessed so far
 * @returns 
 */
function MaskedText({ text, usedLetters }) {
    const letters = getAllCharacters(text, usedLetters).split('');
    return (
        <div>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-1 text-white text-2xl">{letter}</span>
                )
            })}
        </div>
    )
}



export default MaskedText;