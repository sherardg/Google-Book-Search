import React from "react";

export const List = ({ children }) => (
    <ul className="List-group">
        {children}
    </ul>
);

export function ListItem({ children }) {
    return <li className="list-group-item">
        {children}
    </li>
};