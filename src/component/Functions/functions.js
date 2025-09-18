const getSolution = async (Data) => {
    return Data[Math.floor(Math.random() * Data.length)];
}

const handleKeypress = (
    event, currentGuess, setCurrentGuess, solution, setIsGameOver, isGameOver
) =>{
    if(isGameOver)
        return;

    if(event.key === 'Enter') {
        if(currentGuess.length !== 5)
            return;

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
    
    setCurrentGuess(oldguess=> oldguess + event.key)
    
}

export {
    getSolution,
    handleKeypress
};