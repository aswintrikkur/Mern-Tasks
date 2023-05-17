import React, { useEffect, useState } from "react";

export function Signup({ closeButton }) {
    // state declaration
    const [field, setField] = useState({
        firstName: "",
        email: "",
        gender: "",
        skills: [],
        country: "",
        password: "",
    });

    // function definition
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChange = (event) => {
        if (event.target.name === "skills") {
            console.log("skills selected");
            setField({ ...field, [event.target.name]: [...field.skills, event.target.value] });
            return;
        }
        setField({ ...field, [event.target.name]: event.target.value });
    };
    console.log(field);

    const closeForm = (event) => {
        // console.log(closeButton);
        closeButton(false); //toggle btn
    };
    // console.log(props.closeButton.newUser);

    return (
        <div>
            <form onSubmit={handleSubmit} className="container">
                <div className="close-btn">
                    <button name="existingUser" onClick={closeForm}>
                        X
                    </button>
                </div>
                <h2>Signup Form</h2>
                <div className="form-body">
                    <div className="form-row">
                        <div className="form-key">
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" id="firstName" name="firstName" onChange={handleChange} />
                        </div>
                    </div>

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
                            <label>Gender</label>
                        </div>
                        <div className="form-value">
                            <input type="radio" id="male" value="male" name="gender" onChange={handleChange} />
                            <label htmlFor="male"> Male</label>
                            <input type="radio" id="female" value="female" name="gender" onChange={handleChange} />
                            <label htmlFor="female">Female </label>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-key">
                            <label>Skills</label>
                        </div>
                        <div className="form-value skills-value">
                            <div className="skills-col">
                                <div>
                                    <input type="checkbox" id="html" name="skills" value="html" onChange={handleChange} />
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
                    </div>

                    <div className="form-row">
                        <div className="form-key">
                            <label htmlFor="">Country</label>
                        </div>
                        <div className="form-value country-value">
                            <select name="country" id="country" onChange={handleChange}>
                                <option value="">select</option>
                                <option value="india">India</option>
                                <option value="uae">UAE</option>
                                <option value="canada">canada</option>
                            </select>
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

                    <div className="form-row">
                        <div className="form-key">
                            <label htmlFor="">confirm password</label>
                        </div>
                        <div className="form-value value1">
                            <input type="password" id="" name="" onChange={handleChange} />
                        </div>
                    </div>

                    <div className=" row-signup">
                        <button>Signup</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
