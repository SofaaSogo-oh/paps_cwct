import React from "react";
import "../../css/blocks.css"
import "./PP_view.css"

/* export default function PP_view({firstName, lastName, middleName, phoneNumber, address, profilePicture}) {
    return (
        <div class="accent-space">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div class="space">
                    <a href={profilePicture}>
                        <img src={profilePicture} />
                    </a>
                </div>
                <div class="space">
                    <h3>
                        <ul>
                            <li> Имя: {firstName} </li>
                            <li> Фамилия: {lastName} </li>
                            <li> Отчество: {middleName} </li>
                        </ul>
                        <ul style={{listStyleType: "square"}}>
                            <li>Номер: {phoneNumber}</li>
                            <li>Адрес: {address}</li>
                        </ul>
                    </h3>
                </div>
            </div>
        </div>
    )
} */

export default function PP_view({ firstName, lastName, middleName, phoneNumber, address, profilePicture, status }) {
// Определяем классы в зависимости от статуса
const getStatusClass = () => {
    switch (status) {
        case 'warning': return 'warning-space';
        case 'error': return 'error-space';
        default: return '';
    }
};

return (
    <div className={`accent-space ${getStatusClass()}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
            {profilePicture && (
                <div className="space profile-picture-container">
                    <a href={profilePicture} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={profilePicture} 
                            alt={`${firstName} ${lastName}`} 
                            className="profile-image"
                        />
                    </a>
                </div>
            )}
            <div className="space user-info">
                <div className="name-section">
                    <h3>Личные данные</h3>
                    <ul>
                        <li><strong>Имя:</strong> {firstName || 'Не указано'}</li>
                        <li><strong>Фамилия:</strong> {lastName || 'Не указано'}</li>
                        {middleName && <li><strong>Отчество:</strong> {middleName}</li>}
                    </ul>
                </div>
                <div className="contact-section">
                    <h3>Контактная информация</h3>
                    <ul style={{ listStyleType: "square" }}>
                        <li><strong>Номер:</strong> {phoneNumber || 'Не указан'}</li>
                        <li><strong>Адрес:</strong> {address || 'Не указан'}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}