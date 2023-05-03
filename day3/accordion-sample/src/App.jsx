import React, { useState, useTransition } from "react";
import "./App.css";
import { UserData } from "./components/UserData";
import { Accordion } from "./components/Accordion";
import Carousel from "./components/Carousel";

function App() {
    // state declarations
    const [color, setColor] = useState(null);
    const [btnToggle, setBtnToggle] = useState({
        /* key & values are set to object using the onHandle()*/
    });
    const [show, setShow] = useState(true);

    const onHandle = (keyName) => {
        console.log(keyName);
        if (!btnToggle[keyName]) {
            // checking is there a key  inside btnToggle{}, if 'no' then go inside if{}
            setBtnToggle({
                [keyName]: true, //creating key with argument and assigned 'true'
            });
            setColor(keyName);
            return;
        }
        setBtnToggle({
            [keyName]: false,
        });
        setColor(null);
    };
    console.log(btnToggle); //to check current key&values

    return (
        <div className="app-container">
            <i className="fa-solid fa-bars fa-lg"></i>
            <div
                className="btn-container"
                onMouseOver={() => {
                    setShow(true);
                }}
                onMouseLeave={() => {
                    setShow(false);
                }}
                // style={{ visibility: show ? "visible" : "hidden" }}
                style={{
                    translate: show ? "0px" : "0px -55px",
                    background: show ? " linear-gradient(180deg, rgb(0, 0, 0),transparent)" : "none",
                }}
            >
                <button
                    onClick={() => onHandle("userData")}
                    style={{ backgroundColor: color === "userData" ? "black" : "gray" }}
                >
                    User-Data
                </button>
                <button
                    onClick={() => onHandle("accordion")}
                    style={{ backgroundColor: color === "accordion" ? "black" : "gray" }}
                >
                    Accordion
                </button>
                <button
                    onClick={() => onHandle("carousel")}
                    style={{ backgroundColor: color === "carousel" ? "black" : "gray" }}
                >
                    Carousel
                </button>
            </div>
            <div className="display-contanier">
                {btnToggle.userData && <UserData />} {/* terinary operator___simplified_syntax */}
                {btnToggle.accordion && <Accordion />}
                {btnToggle.carousel && <Carousel />}
            </div>
        </div>
    );
}

export default App;
