import React, { useEffect, useState } from "react";

export function Title(props) {
    const { content } = props; //props has deconstructed. so we can use {content} anywhere.
    // otherwise we have to use {props.content}

    //state
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        console.log("useEffect rendering");
        const timeChanger = setInterval(() => {
            setTimer((prev) => prev + 1);
            console.log("timer running");
        }, 1000);

        return () => {
            clearInterval(timeChanger);
            console.log("timer has stopped");
        };
    }, []);
    // console.log(timer);

    return (
        <div >
            <h1 className="content">{content}</h1>
            <div className="timer-container">
                <button> <h4> {timer} s</h4></button>
            </div>
        </div>
    );
}
