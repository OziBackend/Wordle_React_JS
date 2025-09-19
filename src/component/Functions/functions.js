const getSolution = (Data) => {
    return Data[Math.floor(Math.random() * Data.length)];
}

const handleKeypress = (
    event, currentGuess, setCurrentGuess, solution, isGameOver, setIsGameOver, guesses, setGuesses
) =>{
    if(isGameOver)
        return;

    if(event.key === 'Enter') {
        if(currentGuess.length !== 5)
            return;

        const newGuesses = [...guesses]
        newGuesses[guesses.findIndex(val=>val ==null)] = currentGuess
        setGuesses(newGuesses)
        setCurrentGuess('')

        const isCorrect = solution === currentGuess;
        if(isCorrect)
            setIsGameOver(true)
    }

    if (currentGuess.length >= 5) 
        return;

    if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0,-1))
        return
    }
    
    const isLetter = event.key.match(/^[a-z]{1}$/) != null
    if(isLetter)
        setCurrentGuess(oldguess=> oldguess + event.key)
    
}

export {
    getSolution,
    handleKeypress
};