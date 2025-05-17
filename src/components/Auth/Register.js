import React, { useEffect } from "react";
import Base from "../Base/Base";
import { useState } from 'react'
import { checkAuthStatus, setAuthToken } from "../../helper/authStatus";
import { useNavigate } from "react-router-dom";
import "../../css/placement.css"
import "axios"
import "../../css/forms.css"
import axios from "axios";

export default function Register() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [respErr, setRespErr] = useState('');
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(login + password);
        axios.post("/api/user/register", {
            login: login,
            password: password
        })
            .then(function (response) {
                console.log(response);
                setAuthToken(response.data.token);
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
                setRespErr(`Error (${error.response.status}): ${error.response.data}`);
            })
    }
    useEffect(() => {
        if (checkAuthStatus())
            navigate("/");
    }, [navigate]);
    return (
        <>
            <title>Логин</title>
            <Base>
                <div class="pos-center-column">
                    <div class="space auth-form">
                        <h2>Регистрация</h2>
                        <form id="login-form" onSubmit={onSubmit}>
                            <label for="login">Логин</label>
                            <input type="text"
                                id="login"
                                name="login"
                                onChange={(e) => setLogin(e.target.value)}
                                required /><br />

                            <label for="password">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required /><br /><br />

                            <input type="submit" value="Вход" />
                        </form>
                    </div>
                    {respErr &&
                        (<div class="space  auth-form error-space">
                            {respErr}
                        </div>)}
                </div>
            </Base>
        </>
    );
}
