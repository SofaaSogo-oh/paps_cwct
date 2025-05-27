import React, { useEffect, useState } from "react";

import "../../css/blocks.css"
import axios from "axios";
import { checkAuthStatus, getAuthToken } from "../../helper/authStatus";
import { useNavigate } from "react-router-dom";
import ImageSelector from "../Base/ImageSelector";
import Base from "../Base/Base";
import Hideable from "../Base/hidingElement";

export default function PP_edit() {
    const [profilePicture, set_profilePicture] = useState(null);
    const [firstName, set_firstName] = useState('');
    const [secondName, set_secondName] = useState('');
    const [middleName, set_middleName] = useState('');
    const [phoneNumber, set_phoneNumber] = useState('');
    const [address, set_addrress] = useState('');

    const [message, set_message] = useState('');
    const [errMsg, set_errMsg] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!checkAuthStatus()) {
            navigate("/");
            return;
        }

        const formData = new FormData();
        console.log("FOO");

        if (profilePicture) {
            formData.append("profile_picture", profilePicture);
        }

        formData.append('token', getAuthToken());
        formData.append('first_name', firstName);
        formData.append('second_name', secondName);
        formData.append('middle_name', middleName);

        formData.append('phone_number', phoneNumber)
        formData.append('address', address);

        axios.post('/api/user/personal_data', formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
        .then(function (response) {
            console.log(response);
            set_message(response);
        })
        .catch(function (error) {
            console.log(error);
            set_errMsg(`Error (${error.response.status}): ${error.response.data}`)
        });
    }

    useEffect(() => {
        if (!checkAuthStatus()) {
            navigate("/")
            return;
        }
        axios.get('/api/user/personal_data', {
            authToken: getAuthToken()
        }).then(function (response) {
            set_firstName(response.data.firstName);
            set_secondName(response.data.secondName);
            set_middleName(response.data.middleName);
            set_phoneNumber(response.data.phoneNumber);
            set_addrress(response.data.address);

            if (response.data.profilePicture) {
                // Здесь мы сохраняем URL, но не сам файл
                set_profilePicture(response.data.profilePicture);
            }
            console.log(response)
        }).catch(function (_) {})
    }, [navigate]);

    return (
        <>
            <title>Личный клиент</title>
            <Base>
                <div className="pos-center-column">
                    <div className="space auth-form">
                        <h2>Личные данные</h2>
                        <form id="pp-edit-form" onSubmit={onSubmit}>
                            <label for="first_name">Имя</label>
                            <input type="text"
                                id="first_name"
                                name="first_name"
                                onChange={(e) => set_firstName(e.target.value)}
                                value={firstName}
                                required />
                            <label for="second_name">Фамилия</label>
                            <input type="text"
                                id="second_name"
                                name="second_name"
                                onChange={(e) => set_secondName(e.target.value)}
        value={secondName}
                                required />
                            <label for="middle_name">Отчество</label>
                            <input type="text"
                                id="middle_name"
                                name="middle_name"
        value={middleName}
                                onChange={(e) => set_middleName(e.target.value)} />
                            <label for="phone_number">Номер телефона</label>
                            <input type="text"
                                id="phone_number"
                                name="phone_number"
                                onChange={(e) => set_phoneNumber(e.target.value)} />
                            <label for="address">Адрес</label>
                            <input type="text"
                                id="address"
                                name="address"
        value={address}
                                onChange={(e) => set_addrress(e.target.value)} />
                            <label for="profile_picture">Изображение профиля</label>
                            <Hideable>
                                <ImageSelector id="profile_picture"
                                    imgState={profilePicture}
                                    setImgState={set_profilePicture} />
                            </Hideable>
                            <input type="submit" value="Отправка данных" />
                        </form>
                    </div>
                    {errMsg &&
                        (<div className="space auth-form error-space">
                            {errMsg}
                        </div>)}

                    {message &&
                        (<div className="space auth-form warning-space">
                            {message}
                        </div>)}
                </div>
            </Base>
        </>
    )
}
