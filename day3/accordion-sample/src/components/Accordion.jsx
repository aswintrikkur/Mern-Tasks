import { useState } from "react";
import "./Accordion.css";

export function Accordion() {
    const [faq, setFaq] = useState([
        {
            id: 1,
            title: "Chapter 0: How Does the Web Work",
            content: `What is browser
What is IP
What is DNS
What is a Server
What is a Client
How does the communication on the internet work`,
        },
        {
            id: 2,
            title: "Chapter 1: React + Git",
            content: `What is React
How does it work?
What is JSX
Class vs Functional
React Hooks
React Router
Folder Structure
React Authentication
Responsiveness
Performance Optimization
Pro Tips+
Daily Task between each topic`,
        },
        {
            id: 3,
            title: "Chapter 2: Node/Express",
            content: `What is Node
What is Express
How does it work?
What is an API
What is a Middleware
Router
MVC Pattern
Authentication using JWT
Pro Tips+
Daily Task between each topic`,
        },
        {
            id: 4,
            title: "Chapter 3: MongoDB/Mongoose",
            content: `What is MongoDB
What is Mongoose
No SQL vs SQL
What is Schema
Pro Tips+
Daily Task between each topic`,
        },
        {
            id: 5,
            title: "Chapter 4: Deployment",
            content: `Front End Deployment
Back End Front End Deployment
Database Front End Deployment`,
        },
        { id: 6, title: "Final Project", content: `Join to find out 😉` },
    ]); //title and content

    const [currentId, setCurrentId] = useState("");

    const onHandle = (dataId) => {
        // if (dataId == currentId) {
        //     setCurrentId("");
        //     return;
        // }
        // setCurrentId(dataId);
        setCurrentId(currentId===dataId?"":dataId);     //it work same as the above if condition
    };

    return (
        <>
            <div className="container-faq">
                <img id="img" src="../../src/images/faq.png" alt="faq imag" />

                <div className="faq-section">
                    <h1>Course Details</h1>
                    {faq.map((data, index) => (
                        // console.log(data, index); // console.log("element==",data.title);
                        <>
                            <div key={data.id} className="faq1" onClick={() => onHandle(data.id)}>
                                <h6> {data.title}</h6>
                                {data.id === currentId ? (
                                    <i class="fa-solid fa-caret-up"></i>
                                ) : (
                                    <i className="fa-solid fa-caret-down"></i>
                                )}
                            </div>
                            {data.id === currentId && <pre className="content-box">{data.content} </pre>}
                            {/* displaying the content based on which div is selected */}
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
