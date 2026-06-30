import React, {useState, useRef, useEffect} from "react";

function StopWatch(){

    const [isRunning, setRunning] = useState(false);
    const [elapsedTime, SetelapsedTime] = useState(0);
    const interIdRef = useRef(null);
    const StartTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            interIdRef.current = setInterval(() => {
                SetelapsedTime(Date.now() - StartTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(interIdRef.current);
        }

    }, [isRunning]);

    function start(){
        setRunning(true);
        StartTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setRunning(false);
    }

    function reset(){
        SetelapsedTime(0);
        setRunning(false);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let Miliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        Miliseconds = String(Miliseconds).padStart(2, "0")

        return `${minutes}:${seconds}:${Miliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    )

}

export default StopWatch