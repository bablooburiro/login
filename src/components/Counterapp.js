import react from "react";
import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [hoverText, setHoverText] = useState("");

    useEffect(() => {
        console.log(`Counter updated: ${count}`);
    }, [count]);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const handleMouseEnter = () => {
        setHoverText("You are hovering over the counter!");
    };

    const handleMouseLeave = () => {
        setHoverText("");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ fontSize: "4rem", margin: "20px" }}
            >
                {count}
            </h1>
            {hoverText && <p>{hoverText}</p>}
            <div>
                <button onClick={handleIncrement} style={{ margin: "10px", padding: "10px 20px" }}>
                    Increment
                </button>
                <button onClick={handleDecrement} style={{ margin: "10px", padding: "10px 20px" }}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;
