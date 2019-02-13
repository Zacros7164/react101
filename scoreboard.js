function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}


function Player(props){
    return(
        <div className="player">
            <div className="player-name">{props.name}</div>
            <Counter score="0"/>
        </div>
    )
}

function Counter(props){
    return(
        <div className="counter">
            <button className="minus waves-effect waves-light btn">-</button>
            <div className="player-score">{props.score}</div>
            <button className="plus waves-effect waves-light btn">+</button>
        </div>
    )
}


// Application is proper case, which means it's a component
// All conponents, without exception, MUST return a SINGLE dom element
function Application(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col s6 s3-offset board">
                    <Header title={props.title} />
                    <div className="players">
                        <Player name="Michael"/>
                        <Player name="Jim"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


// ReactDOM.render puts react stuff in the DOM
// it takes 2 args
// 1. what 2. where

ReactDOM.render(
    <Application title="Ping Pong Tourney" />,
    document.getElementById('root')
);