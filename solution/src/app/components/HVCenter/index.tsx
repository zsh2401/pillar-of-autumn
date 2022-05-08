import React from "react";
import css from "./index.module.css"
import { IStdProps } from "sz-react-support"

export default function (props: IStdProps) {
    return <div className={css["outer"]}>
        <div className={css["inner"]}>
            <div {...props}/>
        </div>
    </div >
}