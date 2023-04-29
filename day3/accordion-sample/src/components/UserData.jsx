import React, { useEffect } from "react";
import "./UserData.css";
import axios from "axios";
import { useState } from "react";

export function UserData() {
    // state
    const [userList, setUserList] = useState([]);
    const [name, setName] = useState("Aswin");
    const [count, setCount] = useState(200);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        console.log("useEffect rendering...");
        fetchUsers();
    }, []);

    // API call
    const fetchUsers = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/todos");
        setUserList(response.data);
    };

    // userList.shift();
    console.log("userList: ", userList);

    const deleteElement = (index) => {
        console.log(index);
        userList.splice(index, 1);
        setCount((count) => count - 1);
    };

    return (
        <>
            <div className="container">
                <h2> Welcome {name}</h2>
                <p>
                    No. of Users: <b>{count}</b>{" "}
                </p>

                <ol>
                    {userList.map((data, index) => {
                        return (
                            <li key={data.id}>
                                {data.title}{" "}
                                <button className="delete" onClick={() => deleteElement(index)}>
                                <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>
    );
}
