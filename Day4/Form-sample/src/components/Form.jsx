import React from "react";

export function Form() {
    const submit = (event) => {};

    return (
        <div>
            <div className="container">
                <h2>Sign-up Form</h2>
                <div className="form-body">
                    <form action="submit">
                        <div className="form-row row1">
                            <label htmlFor="">First name</label>
                            <input type="text" name='firstName'/>
                        </div>
                        <div className="form-row row1">
                            <label htmlFor="">Email</label>
                            <input type="Email" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="">Gender</label>
                            <div className="gender-value">
                                <label htmlFor="male"> male</label>
                                <input type="radio" id="male" value="male" name="gender" />
                                <label htmlFor="female">Female </label>
                                <input type="radio" id="female" value="female" name="gender" />
                            </div>
                        </div>
                        <div className="form-row row-dob">
                            <label htmlFor="dob">DOB</label>
                            <input type="date" name="" id="" />
                        </div>
                        <div className="form-row row-skills">
                            <label htmlFor="">Skills</label>
                            {/* <div> */}
                            <div className="row-skills-inner">
                                <label htmlFor="html">HTML </label>
                                <input type="checkbox" id="html" name="skills" value="html" />
                            </div>
                            <div className="row-skills-inner">
                                <label htmlFor="css">CSS </label>
                                <input type="checkbox" id="css" name="skills" value="css" />
                            </div>
                            <div className="row-skills-inner">
                                <label htmlFor="javascript">Javascript </label>
                                <input type="checkbox" id="javascript" name="skills" value="javascript" />
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="form-row">
                            <label htmlFor="">Country</label>
                            <select name="country" id="country">
                                <option value="">select</option>
                                <option value="india">India</option>
                                <option value="uae">UAE</option>
                                <option value="canada">canada</option>
                            </select>
                        </div>
                        <button>Sign-up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
