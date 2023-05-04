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
                <div className="title-container">
                    <button onClick={onHandle} name="component1">
                        Toggle1
                    </button>
                    {toggle.component1 && <Title content="user1" />}
                </div>
                
                <div className="title-container">
                    <button onClick={onHandle} name="component2">
                        Toggle2
                    </button>
                    {toggle.component2 && <Title content="user2" />}
                </div>
            </div>
        </>
    );
}

export default App;
