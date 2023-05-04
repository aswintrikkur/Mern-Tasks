import { useState } from "react";
import "./App.css";
import { Title } from "./component/Title";

function App() {
    const [toggle, setToggle] = useState({
        component1: true,
        component2: true,
    });
    // console.log(toggle.component1);
    const onHandle = (event) => {
        setToggle({
            ...toggle,
            [event.target.name]: !toggle[event.target.name],
        });
        // console.log(event.target.name);
        // console.log(toggle[event.target.name]);
    };
    console.log(toggle);

    return (
        <>
            <button onClick={onHandle} name="component1">
                Toggle1
            </button>
            {toggle.component1 && <Title />}
            <button onClick={onHandle} name="component2">
                Toggle2
            </button>
            {toggle.component2 && <h1>helloWorld</h1>}
        </>
    );
}

export default App;
