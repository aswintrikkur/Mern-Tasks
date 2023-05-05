import { useState } from "react";
import "./App.css";
import { Title } from "./component/Title";

function App() {
    const [toggle, setToggle] = useState({
        component1: true,
        component2: true,
    });
    // const [titleValue, setTitleValue]=useState(["hi"]);
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
            <div className="title-container-main">
                <button onClick={onHandle} name="component1">
                    Toggle1
                </button>
                <div className="title-container">{toggle.component1 && <Title content="helloWorld" />}</div>
            </div>
        </>
    );
}

export default App;
