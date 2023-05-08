import React from "react";

export function Form() {
    const submit = (event) => {};

    return (
        <div>
            <div className="container">
                <h2>Signup Form</h2>
                <div className="form-body">
                    <div className="form-row">
                        <div className="form-key">
                            <label>First Name</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" name="firstName" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-key">
                            <label>Email</label>
                        </div>
                        <div className="form-value value1">
                            <input type="text" name="email" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-key">
                            <label>Gender</label>
                        </div>
                        <div className="form-value">
                            <input type="radio" id="male" value="male" name="gender" />
                            <label htmlFor="male"> Male</label>
                            <input type="radio" id="female" value="female" name="gender" />
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
                                    <input type="checkbox" id="html" name="skills" value="html" />
                                    <label htmlFor="html">HTML </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="css" name="skills" value="css" />
                                    <label htmlFor="css">CSS </label>
                                </div>
                            </div>
                            <div className="skills-col">
                                <div>
                                    <input type="checkbox" id="javascript" name="skills" value="javascript" />
                                    <label htmlFor="javascript">Javascript </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="php" name="skills" value="php" />
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
                            <select name="country" id="country">
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
            </div>
        </div>
    );
}
