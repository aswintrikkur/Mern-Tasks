import React, { useState } from "react";

export function Form() {
    // state declaration
    const [field, setField] = useState({
        firstName: "",
        email: "",
        gender: "",
        skills: [],
        country: "",
    });

    // function definition
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChange = (event) => {
        if (event.target.name === "skills") {
            // setField({ ...field, ...field.skills, [event.target.name]: [event.target.name].push(event.target.value) });
            setField({ [event.target.name]: [...field.skills, event.target.value] });
            // console.log(event);
        }
        setField({ ...field, [event.target.name]: event.target.value });
    };
    console.log(field);

    return (
        <div>
            <form onSubmit={handleSubmit} className="container">
                <h2>Signup Form</h2>
                <div className="form-body">
                    <div className="form-row">
                        <div className="form-key">
                            <label>First Name</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" name="firstName" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-key">
                            <label>Email</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" name="email" onChange={handleChange} />
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
                    <div className=" row-signup">
                        <button>Signup</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
