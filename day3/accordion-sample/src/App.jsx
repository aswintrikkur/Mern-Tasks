import React, { useState } from "react";
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
        <>
            <div className="btn-container">
                <button
                    onClick={() => onHandle("userData")}
                    style={{ backgroundColor: color === "userData" ? "black" :"gray" }}
                >
                    User-Data
                </button>
                <button
                    onClick={() => onHandle("accordion")}
                    style={{ backgroundColor: color === "accordion" ? "black" :"gray" }}
                >
                    Accordion
                </button>
                <button
                    onClick={() => onHandle("carousel")}
                    style={{ backgroundColor: color === "carousel" ?  "black" :"gray" }}
                >
                    Carousel
                </button>
            </div>

            <div className="display-contanier">
                {btnToggle.userData && <UserData />} {/* terinary operator___simplified_syntax */}
                {btnToggle.accordion && <Accordion />}
                {btnToggle.carousel && <Carousel />}
            </div>
        </>
    );
}

export default App;
