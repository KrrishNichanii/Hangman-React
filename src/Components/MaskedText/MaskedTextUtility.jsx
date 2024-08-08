export function getAllCharacters(word, usedLetters) {
    // This function will return a string with all the characters of the word that have been guessed so far
    usedLetters = usedLetters.map(letter => letter.toUpperCase()); // ['b', 'e'] -> ['B', 'E']
    const guessedLetters = new Set(usedLetters); // {'B', 'E'}
    const characters = word.toUpperCase().split('').map(char => {
        if (guessedLetters.has(char)) {
            return char;
        }
        return '_';
    }); // ['_', '_', '_', 'B', '_', 'E']
    return characters.join(''); // ___B_E
}

export function isWin(word , usedletters){
    let s = getAllCharacters(word , usedletters) ; 
    console.log('Res ',s);
    if(s.includes('_')) return false ; 
    else return true ; 
}


const words = {
    Animals : ["Lion" , "Tiger" , 'Bear' , "Crocodile" ,"Elephant" , "Rhinoceros" , "Giraffe"] , 
    Food: ["Pasta" , "Raviolli" , "Shawarma","Biryani" ,"Pizza","Burger","Nachos" , "Croissant"],
    Movies: ["Transformers","Avengers","Deadpool","Wolverine","Batman","Superman","Flash",'Titanic']
}

export function selectMaskedText(category , difficulty){
    // console.log('Cat ',category);
    const idx = Math.floor(Math.random() * (words[`${category}`].length));
    // console.log("Idx selected ",idx);
    const selectedWord = words[`${category}`][idx] ;
    // console.log('Selected word is ',selectedWord);
    if(difficulty == 'Hard') return {word: selectedWord.toUpperCase() ,markedLetters:[]} ;
    
    if(difficulty == 'Easy'){
        let  cnt = 0 ; 
        const markedLetters = [] ; 
        while(cnt  < selectedWord.length/2-1){
            const idx = Math.floor(Math.random() * (selectedWord.length));
            if(!markedLetters.includes(selectedWord[idx])){
                markedLetters.push((selectedWord[idx] + "").toUpperCase()[0]) ;
                cnt++ ; 
            }
        }

        return {word: selectedWord.toUpperCase() , markedLetters} ; 
    }

    const i = Math.floor(Math.random() * (selectedWord.length));
    const markedLetters = [selectedWord[i]] ;
    return {word: selectedWord.toUpperCase() , markedLetters} ;  
}