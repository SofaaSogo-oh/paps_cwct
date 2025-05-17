import React from "react"
import Base from "./Base";

const codes = {
    400: "Bad Request",
    401: "Unauthorized",
    404: "Not found",
    403: "Forbidden",
};
export default function({code=404}) {
    return (
        <>
        <title>Error</title>
        <Base>
            <h1>{code}</h1>
            <h2>{codes[code]}</h2>
        </Base>
        </>
    );
}