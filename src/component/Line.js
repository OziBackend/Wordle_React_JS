import "../App.css";

export default function Line(props) {
    const tiles = [];
    const {guess, isFinal, solution} = props

    for (let i=0; i<5; i++){
        var char = guess[i];
        let className = 'tile'
        
        if (isFinal) {
            char = char.toUpperCase();
            if (char === solution[i]) {
                className += ' correct'
            }else if (solution.includes(char)) {
                className += ' close'
            }else{
                className += ' incorrect'
            }
        }
        

        tiles.push(
            <div key={i} className={className}>
                {char}
            </div>
        )
    }
    
    return (
        <div className="line">
            {tiles}
            
        </div>
    )
}