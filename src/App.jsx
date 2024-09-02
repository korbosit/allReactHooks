import { useState } from "react";

function App() {
    // example 2 useState
    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2023",
        color: "red",
    });
    const changeColor = () => {
        setCar((car) => {
            return { ...car, color: "blue" };
        });
    };

    return (
        <>
            <h1>{car.brand}</h1>
            <h2>
                It us a {car.color} {car.model} from {car.year}
            </h2>
            <button onClick={changeColor}>Blue</button>
        </>
    );
}

export default App;
