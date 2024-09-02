import React, { useState, useEffect } from "react";

function App() {
    // example 1 useEffect
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Vovanec");

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 2000);
    }, [count, name]);

    return (
        <>
            <h1>I`ve rendered {count} times!</h1>
        </>
    );
}

export default App;
