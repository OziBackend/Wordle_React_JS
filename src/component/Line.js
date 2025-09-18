import "../App.css";

export default function Line(props) {
    const tiles = [];

    for (let i=0; i<5; i++){
        const char = props.guess[i];
        tiles.push(<div key={i} className='tile'>{char}</div>)
    }
    
    return (
        <div className="line">
            {tiles}
            
        </div>
    )
}