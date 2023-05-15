import React from "react";
import { useState } from "react";

export function Login({ closeButton }) {
    // state declaration
    const [field, setField] = useState({
        email: "",
        password: "",
    });

    //function definitions
    const handleChange = (event) => {
        setField({ ...field, [event.target.name]: event.target.value });
    };
    console.log(field);
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const closeForm = (event) => {
        closeButton(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="container login-container">
                <div className="close-btn">
                    <button name="existingUser" onClick={closeForm}>
                        X
                    </button>
                </div>

                <h2>Login </h2>
                <div className="form-body">
                    <div className="form-row">
                        <div className="form-key">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" id="email" name="email" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-key">
                            <label htmlFor="password">password</label>
                        </div>
                        <div className="form-value value1">
                            <input type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                    </div>

                    <div className=" row-signup">
                        <button>Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
