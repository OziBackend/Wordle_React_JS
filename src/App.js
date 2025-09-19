import './App.css';
import Data from './component/Data/Data';
import { useState, useEffect } from 'react';

import {
  getSolution,
  handleKeypress,
  // handleType
} from './component/Functions/functions';

import Line from './component/Line';

function App() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(()=>{
    const handleType =(event)=>{   
      handleKeypress(
        event, 
        currentGuess, 
        setCurrentGuess, 
        solution, 
        isGameOver,
        setIsGameOver, 
        guesses,
        setGuesses
      )
    }
    window.addEventListener('keydown', handleType)

    return () => window.removeEventListener('keydown', handleType)
  }, [currentGuess, isGameOver, solution, guesses])

  useEffect(() => {
    setSolution(getSolution(Data));
    
  }, []);

  
  return (
    <div className="App">
      <div className="board">
        {console.log(solution)}
        
        {guesses.map((guess, index) => {
          const isCurrentGuess = index === guesses.findIndex(val => val == null)
          return(
            <Line 
              key={index}
              guess={isCurrentGuess ? currentGuess : guess ?? ''}
              isFinal={!isCurrentGuess && guess !=null}
              solution={solution}
            />
          )
        })}
        

      </div>
    </div>
  );
}

export default App;
