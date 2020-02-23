class Timer extends React {
    status = Timer.getInitialState();
    componentDidMount() {
        this.interval = setInterval(this.tick, 500);
    }

    componentWillUnMount() {
        clearInterval(this.interval);
    }
    tick() {
        this.status.secondsElapsed ++;
    }

    static getInitialState() {return {secondsElapsed: 0};}

    render() {return (<div>Seconds Elapsed: {this.status.secondsElapsed}</div>);}

}