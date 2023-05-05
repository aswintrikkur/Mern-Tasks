import React, { useEffect, useState } from "react";

export function Toggle(props) {
    const { content } = props; //props has deconstructed. so we can use {content} anywhere.
    // otherwise we have to use {props.content}

    //state
    const [timer, setTimer] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        console.log("useEffect rendering");
        const onChanger = setInterval(() => {
            {
                running && (setPercentage((prev) => prev + 4), setTimer((prev) => prev + 1));
                console.log("timer running");
            }
        }, 1000);

        {
            onChanger && clearInterval(percentage > 98 && onChanger);
        }

        return () => {
            clearInterval(onChanger);
            // console.log("timer has stopped");
        };
    }, [percentage]);

    const loadingHandle = () => {
        setRunning((prev) => !prev);
    };

    return (
        <div>
            <h1 className="content">{content}</h1>
            <div className="timer-container">
                <button onClick={loadingHandle}>
                    <h4> {timer} s</h4>
                </button>
                <div className="loading">
                    <div className="time" style={{ width: percentage * 10 }}>
                        {percentage} %
                    </div>
                </div>
            </div>
        </div>
    );
}
