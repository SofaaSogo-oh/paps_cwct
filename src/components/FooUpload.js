import React from "react";
import Base from "./Base/Base";


export default function FooUpload() {
    return (
        <Base>
        <h1>Upload file</h1>
        <form action="/api/upload" method="post" encType="mulitpart/form-data">
            <label>Файл</label><br />
            <input type="file" name="filename" /> <br/><br/>
            <input type="submit" value="send" />
        </form>
        </Base>
    );
}