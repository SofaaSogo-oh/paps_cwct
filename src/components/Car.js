import React from "react";
import "../css/blocks.css"

export default function Car({ brand, model, license_plate, rental_price, children, img }) {
    return (
        <div class="accent-space">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div class="space">
                    <a href={img} >
                        <img src={img} />
                    </a>
                </div>
                <div class="space">
                    <h3>
                        <ul>
                            <li> Цена: {rental_price}; </li>
                            <li> Автомобильный номер: {license_plate};</li>
                        </ul>
                        <ul style={{ listStyleType: "square" }}>
                            <li>Марка: {brand}</li>
                            <li>Модель: {model}</li>
                        </ul>
                    </h3>

                </div>
            </div>
            {children && (
                <div class="space">
                    {children}
                </div>
            )}
        </div>
    )
};