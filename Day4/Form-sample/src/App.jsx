import { useState } from "react";
import "./App.css";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

function App() {
    const [user, setUser] = useState({
        newUser: false,
        existingUser: false,
    });
    const handleToggle = (event) => {
        // console.log(user.newUser);
        // console.log([event.target.name]);
        // console.log([event.target.value]);
        if (event == false) {
            console.log(event);
            setUser({ newUser: false, existingUser: false });
        } else {
            setUser({ ...user, [event.target.name]: event.target.value == "false" ? true : false });
        }
    };
    console.log(user);

    return (
        <div className="app-container">
            {!user.newUser && !user.existingUser && (
                <div className="home">
                    <h1>Welcome to ____</h1>
                    <p>This platform is for creative people to share thier knowledge</p>
                    <button name="newUser" value={user.newUser} onClick={handleToggle}>
                        New User
                    </button>
                    <button name="existingUser" value={user.existingUser} onClick={handleToggle}>
                        Existing user
                    </button>
                </div>
            )}

            {user.newUser && <Signup closeButton={handleToggle} />}
            {user.existingUser && <Login closeButton={handleToggle} />}
        </div>
    );
}

export default App;
