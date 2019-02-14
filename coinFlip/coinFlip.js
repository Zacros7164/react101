class CoinFlip extends React.Component{
    // the first thing we do in ANY class, is call the constructor
    constructor(props){
        // this is a child class, its a child of React.Component
        // in order to get the cool stuff that comes with React.Component we ned to call the super
        super(props)
        // React doesn't care about heads or tails
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        // State is special, React cares about state, A LOT
        this.state = {
            image: this.coin[0]
        }

        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin(){

        // any time state changes, render method runs


        // we NEVER change/mutate state directly
        // it is React's job, not ours, it will kill your app, or another dev will kill you
        // React gave us a setter (bartender example, don't reach across the counter!!!!!)
        let coinSide = Math.round(Math.random());
        this.setState({
            image: this.coin[coinSide]
        })
    }

    // local class method

    // EVERY CLASS COMPONENT MUST HAVE A RENDER

    render(){
        // it is my job to return a single DOM element
        // whether you like it or not, render will run after the constructor
        // React events are camelCase and attached to the element
        // you don't evoke them, you just pass them
        return(
            <div className="coin-flip">
            <button onClick={this.flipCoin}>BUTTON!</button>
                <img src={this.state.image} />
            </div>
        )
    }
}