import React, { useState } from "react";

//callback
function showMessage(message) {
    alert(message)
}
function handleClick(callback, name) {
    const message = `Hello ${name}`
    callback(message)

}
function GreetingButton() {
    const [name, setName] = useState("");
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"></input>
            <button onClick={() => handleClick(showMessage, name)}>Alert</button>
        </div>)

}
export default GreetingButton;