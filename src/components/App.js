import React, { useState, useEffect } from "react";

export default function UserStorage () {

    const [user, setUser] = useState("Sanjiv");

    useEffect(() => {

        const storedUser = window.localStorage.getItem("user");

        console.log('amazing')

        if (storedUser) {

            setUser(storedUser);

        }

    },[]);

    useEffect(() => {

        window.localStorage.setItem("user", user);

    },[user] );

    return (
        <select value={user} onChange={e => setUser(e.target.value)}>
        <option>Jason</option>
        <option>Akiko</option>
        <option>Clarisse</option>
        <option>Sanjiv</option>
        </select>
    );
}