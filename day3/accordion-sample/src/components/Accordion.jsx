// import React from 'react'
import { useState } from "react";
import "./Accordion.css";

export function Accordion() {
    const [faq, setFaq] = useState([{ title: "title1", content: "content1" }]);

    return (
        <>
            <div className="container-faq">
                {/* <h1>helloworld</h1> */}
                <img id="img" src="../../src/images/faq.png" alt="faq imag" />
              <p></p>

            </div>
        </>
    );
}
