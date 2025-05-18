import React from "react";
import "../../css/blocks.css"

export default function PP_view({first_name, last_name, middle_name, phone_number, address, prof_pic}) {
    return (
        <div class="accent-space">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div class="space">
                    <a href={prof_pic}>
                        <img src={prof_pic} />
                    </a>
                </div>
                <div class="space">
                    <h3>
                        <ul>
                            <li> Имя: {first_name} </li>
                            <li> Фамилия: {last_name} </li>
                            <li> Отчество: {middle_name} </li>
                        </ul>
                        <ul style={{listStyleType: "square"}}>
                            <li>Номер: {phone_number}</li>
                            <li>Адрес: {address}</li>
                        </ul>
                    </h3>
                </div>
            </div>
        </div>
    )
}