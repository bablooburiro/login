import React from "react";
import Child from "./Child";
function Parent() {

    const message = "Allah Rakhio"
    return (
        <Child data={message}></Child>

    )
}
export default Parent;