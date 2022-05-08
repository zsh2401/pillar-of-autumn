import React from "react";

export default function (props: { children: React.ReactNode }) {
    return <div>
        <h1>Header</h1>
        {props.children}
        <h1>Footer</h1>
    </div>
}