import { useState } from "react";
import "./App.css";
import { Toggle } from "./component/Toggle";

function App() {
    const [toggle, setToggle] = useState({
        component1: true,
        // component2: true,      //its required when multiple toggle btn and section is used.
    });
    // const [titleValue, setTitleValue]=useState(["hi"]);
    // console.log(toggle.component1);
    const onHandle = (event) => {
        setToggle({
            ...toggle,
            [event.target.name]: !toggle[event.target.name], //used in multiple toggle btns
        });
        // console.log(event.target.name);
        // console.log(toggle[event.target.name]);
    };

    return (
        <>
            <div className="title-container-main">
                <button onClick={onHandle} name="component1">
                    Toggle1
                </button>
                <div className="title-container">{toggle.component1 && <Toggle content="helloWorld" />}</div>
            </div>
        </>
    );
}

export default App;
