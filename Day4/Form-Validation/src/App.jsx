import { useState } from "react";
import "./App.css";
import { Login } from "./components/Forms/Login";
import { Signup } from "./components/Forms/Signup";

function App() {
    //                                    ------state-----
    const [user, setUser] = useState({
        newUser: false,
        existingUser: false,
    });

    //                          ----------function definitions---------------
    const handleToggle = (event) => {
        /* form handling(open-close) */
        if (event == false) {
            // console.log(event);
            setUser({ newUser: false, existingUser: false }); //form close
        } else {
            setUser({ ...user, [event.target.name]: event.target.value == "false" ? true : false }); //form open
        }
    };
    console.log(user);

    return (
        <div className="app-container">
            {!user.newUser && !user.existingUser && (
                <div className="home">
                    <h1>Welcome to __________</h1>
                    <p>This platform is for creative people to share thier knowledge</p>
                    <button name="newUser" value={user.newUser} onClick={handleToggle}>
                        New User?
                    </button>
                    <button name="existingUser" value={user.existingUser} onClick={handleToggle}>
                        Existing user?
                    </button>
                </div>
            )}

            {user.newUser && <Signup closeButton={handleToggle} />}
            {user.existingUser && <Login closeButton={handleToggle} />}
        </div>
    );
}

export default App;
