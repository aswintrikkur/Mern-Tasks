import React, { Fragment, useEffect, useState } from "react";

export function Signup({ closeButton }) {
    // ---------------------------------state declaration----------------------
    const [field, setField] = useState({
        firstName: "",
        email: "",
        gender: "",
        skills: [],
        country: "",
        password: "",
    });
    const [errorField, setErrorField] = useState({
        firstName: false,
        email: false,
        gender: false,
        skills: false,
        country: false,
        password: false,
    });

    //                                ...........function definition.............
    //for handling input fields (onChange)
    const handleChange = (event) => {
        if (event.target.name === "skills") {
            let newSkills = field.skills; //doubt?????? why assiging 'field.skills'
            if (event.target.checked) {
                newSkills.push(event.target.value); //to add element when checked
                // newSkills = [...field.skills, event.target.value];   //gives same result as push
            } else {
                newSkills.splice(field.skills.indexOf(event.target.value), 1); //to  remove when un-checked
                // newSkills = field.skills.filter((prev) => prev !== event.target.value); //give same result as splice.
            }
            setField((prev) => ({ ...prev, [event.target.name]: newSkills }));
            return;
        }
        setField((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };
    console.log(field);

    //for handling form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValidOnSubmit()) {
            console.log("form is Valid");
            return;
        }
        console.log("form is  Invalid");
    };

    //               form validation.... onSubmit ......   Basic solution
    // const isFormValid = () => {
    //     if (field.firstName === "") {
    //         setErrorField((prev) => ({
    //             ...prev,
    //             firstName: true,
    //         }));
    //         return false;
    //     } else {
    //         setErrorField((prev) => ({
    //             ...prev,
    //             firstName: false,
    //         }));
    //         return true;
    //     }
    // };

    /*               form validation... onSubmit  ......   Better solution...... */
    const isFormValidOnSubmit = () => {
        let error = {
            firstName: false,
            email: false,
            gender: false,
            skills: false,
            country: false,
            password: false,
        };
        if (field.firstName === "") {
            error.firstName = true;
        }
        if (field.email === "") {
            error.email = true;
        }
        if (field.gender === "") {
            error.gender = true;
        }
        if (field.skills.length === 0) {
            error.skills = true;
        }
        if (field.country === "" || field.country === "select") {
            error.country = true;
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

    //.....form validation.......... onBlur
    const isFormValidOnBlur = (event) => {
        const { name, value } = event.target; //de-construction
        setErrorField((prev) => ({ ...prev, [name]: value === "" ? true : false })); // Use [] , if we need to update the value key. Otherwise it'll be a string.
    };

    //form closing btn handling. Update the state in the App.jsx
    const closeForm = (event) => {
        closeButton(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="container">
                <div className="close-btn" /* close button */>
                    <button type="reset" name="existingUser" onClick={closeForm}>
                        X
                    </button>
                </div>
                <h2>Signup Form</h2>
                <div className="form-body">
                    <div className="form-row" /* firstName */>
                        <div className="form-key">
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="form-value value1">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={isFormValidOnBlur}
                            />
                            <div className="error-field">{errorField.firstName && <p>First name is required</p>}</div>
                        </div>
                    </div>

                    <div className="form-row" /* Email*/>
                        <div className="form-key">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" id="email" name="email" onChange={handleChange} onBlur={isFormValidOnBlur} />
                            <div className="error-field">{errorField.email && <p>Email is required</p>}</div>
                        </div>
                    </div>

                    <div className="form-row" /*Gender */>
                        <div className="form-key">
                            <label>Gender</label>
                        </div>
                        <div className="form-value">
                            <div>
                                <input type="radio" id="male" value="male" name="gender" onChange={handleChange} />
                                <label htmlFor="male"> Male</label>
                                <input type="radio" id="female" value="female" name="gender" onChange={handleChange} />
                                <label htmlFor="female">Female </label>
                            </div>
                            <div className="error-field">{errorField.gender && <p>Gender is required</p>}</div>
                        </div>
                    </div>

                    <div className="form-row" /*skills*/>
                        <div className="form-key">
                            <label>Skills</label>
                        </div>
                        <div className="form-value">
                            <div className="skills-value">
                                <div className="skills-col">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="html"
                                            name="skills"
                                            value="html"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="html">HTML </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="css" name="skills" value="css" onChange={handleChange} />
                                        <label htmlFor="css">CSS </label>
                                    </div>
                                </div>
                                <div className="skills-col">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="javascript"
                                            name="skills"
                                            value="javascript"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="javascript">Javascript </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="php" name="skills" value="php" onChange={handleChange} />
                                        <label htmlFor="php">PHP </label>
                                    </div>
                                </div>
                            </div>
                            <div className="error-field">{errorField.skills && <p>Skills is required</p>}</div>
                        </div>
                    </div>

                    <div className="form-row" /* country */>
                        <div className="form-key">
                            <label htmlFor="">Country</label>
                        </div>
                        <div className="form-value country-value">
                            <select name="country" id="country" onChange={handleChange}>
                                <option value="select">select</option>
                                <option value="india">India</option>
                                <option value="uae">UAE</option>
                                <option value="canada">canada</option>
                            </select>
                            <div className="error-field">{errorField.country && <p>Country is required</p>}</div>
                        </div>
                    </div>

                    <div className="form-row" /* password */>
                        <div className="form-key">
                            <label htmlFor="password">password</label>
                        </div>
                        <div className="form-value value1">
                            <input type="password" id="password" name="password" onChange={handleChange} />
                            <div className="error-field">{errorField.password && <p>password is required</p>}</div>
                        </div>
                    </div>

                    <div className="form-row" /* confirm password */>
                        <div className="form-key">
                            <label htmlFor="">confirm password</label>
                        </div>
                        <div className="form-value value1">
                            <input type="password" id="" name="" onChange={handleChange} />
                        </div>
                    </div>

                    <div className=" row-signup" /* sign-up btn */>
                        <button type="submit">Signup</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
