import React from "react";
import { useState } from "react";

export function Login({ closeButton }) {
    //                            ---------------- state declaration ------------------
    const [field, setField] = useState({
        email: "",
        password: "",
    });
    const [errorField, setErrorField] = useState({
        email: false,
        password: false,
    });


    //              .............................function definitions.....................
    //form closing button handling
    const closeForm = (event) => {
        closeButton(false);
    };

    //for handling input fields(onChange)
    const handleChange = (event) => {
        setField({ ...field, [event.target.name]: event.target.value });
        isFormValidOnBlur(event); /*form Validation(onChange) */
    };
    console.log(field);

    //for handling form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValidOnSubmit()) {
            console.log("Form is Valid");
            return;
        }
        console.log("Form is Invalid");
    };

    /*                  ......form Validation(onSubmit).... */
    const isFormValidOnSubmit = () => {
        let error = {
            email: false,
            password: false,
        };
        if (field.email === "") {
            error.email = true;
        }
        if (field.password === "") {
            error.password = true;
        }
        setErrorField(error);

        if (Object.values(error).some((prev) => prev === true)) {
            return false;
        } else {
            return true;
        }
    };

    /*                   .....form Validation(onBlur)..... */
    const isFormValidOnBlur = (event) => {
        const { name, value } = event.target; //de-construction
        setErrorField((prev) => ({ ...prev, [name]: value === "" ? true : false })); // Use [] , if we need to update the value key. Otherwise it'll be a string.
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="container login-container">
                <div className="close-btn" /*closing button */>
                    <button name="existingUser" type="reset" onClick={closeForm}>
                        X
                    </button>
                </div>

                <h2>Login </h2>
                <div className="form-body">
                    <div className="form-row" /* Email */>
                        <div className="form-key">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" id="email" name="email" onChange={handleChange} onBlur={isFormValidOnBlur} />
                            <div className="error-field">{errorField.email && <p>Email is required</p>}</div>
                        </div>
                    </div>

                    <div className="form-row" /* password */>
                        <div className="form-key">
                            <label htmlFor="password">password</label>
                        </div>
                        <div className="form-value value1">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={isFormValidOnBlur}
                            />
                            <div className="error-field">{errorField.password && <p>password is required</p>}</div>
                        </div>
                    </div>

                    <div className=" row-signup" /*Login button */>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
