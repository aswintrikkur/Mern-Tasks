import React, { useEffect } from "react";

export function Title(props) {
    
    // useEffect(() => {
    //     console.log("useEffect rendering");
    //     setInterval(() => {
    //         console.log("setIterval working");
    //     }, 2000);
    // }, []);

    return (
        <div>
            <h2>{props.content}</h2>
            {/* <button> </button> */}
        </div>
    );
}
