import './App.css';
import Data from './component/Data/Data';
import { useState, useEffect } from 'react';

import {getWord} from './component/Functions/setData';

import Line from './component/Line';

function App() {
  var [word, setWord] = useState("");
  var [guesses, setGuesses] = useState(Array(6).fill(null));

  useEffect(() => {
    setWord(getWord(Data));
  }, []);

  
  return (
    <div className="App">
      <div className="board">
        {guesses.map((guess, index) => (
          <Line 
            guess={guess ?? ''}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
