import React from "react";
import Base from "../Base/Base";
import { useState } from 'react'
import { setAuthToken, useAuthCheck } from "../../helper/authStatus";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css"
import "../../css/placement.css"
import axios from "axios";
import { useHandleChange } from "../../helper/formUtils";

export default function Login() {
    const [formData, set_formData] = useState({
        login: '',
        password: ''
    });
    const [respErr, setRespErr] = useState('');
    const navigate = useNavigate();
    const handleChange = useHandleChange(set_formData);

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("/api/user/login", formData);
            setAuthToken(response.data.token);
            navigate("/");
        } catch (error) {
            setRespErr(error.response ?
                `Error (${error.response.status}): ${error.response.data}`
                : "Connection error. Try again later");
        }
    }
    useAuthCheck();
    return (
        <>
            <title>Вход</title>
            <Base>
                <div className="pos-center-column">
                    <div className="space auth-form">
                        <h2>Вход</h2>
                        <form id="login-form" onSubmit={onSubmit}>
                            <label htmlFor="login">Логин</label>
                            <input type="text"
                                id="login"
                                name="login"
                                onChange={handleChange}
                                required /><br />

                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                required /><br /><br />

                            <input type="submit" value="Вход" />
                        </form>
                    </div>
                    {respErr &&
                        (<div className="space auth-form error-space">
                            {respErr}
                        </div>)}
                </div>
            </Base>
        </>
    );
}

