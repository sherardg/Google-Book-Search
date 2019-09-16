import React from "react";

//Export container, row and col components from this file

//Container component allows the use of bootstrap container without class names
export function Container ({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//Row component lets us use bootstrap row without class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//Col component lets us size bootstrap columns with less syntax

export function Col({ size, children }) {
    return (
        <div
        className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
        >
        {children}
        </div>
    );
}


