// import React from 'react'
import { useState } from "react";
import "./Accordion.css";

export function Accordion() {
    const [faq, setFaq] = useState([{ title: "title1", content: "content1" }]);

    return (
        <>
            <div className="container-faq">
                <img id="img" src="../../src/images/faq.png" alt="faq imag" />
                <h1>FAQ</h1>
              <p></p>

            </div>
        </>
    );
}
