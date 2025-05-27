import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { checkAuthStatus, getAuthToken } from "../../helper/authStatus";
import axios from "axios";
import Base from "../Base/Base";
import PP_view from "./PP_view";


export default function PP() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        if (!checkAuthStatus()) {
            navigate("/");
            return;
        }
        axios.get('/api/user/personal_data', {
            authToken: getAuthToken()
        }).then(function (response) {
            console.log(response.data);
            setUserData({
                firstName: response.data.firstName || '',
                secondName: response.data.secondName || '',
                middleName: response.data.middleName || '',
                phoneNumber: response.data.phoneNumber || '',
                address: response.data.address || '',
                profilePicture: response.data.profilePicture || '',
            })
        }).catch(function (_) { })
    }, [navigate]);
    return (
        <>
            <title>Персональная страница</title>
            <Base>
                <h1>Персональные данные</h1>
                {userData &&
                    (
                        <PP_view
                            firstName={userData.firstName}
                            secondName={userData.secondName}
                            middleName={userData.middleName}
                            phoneNumber={userData.phoneNumber}
                            address={userData.address}
                            profilePicture={userData.profilePicture} />
                    )
                }
                <NavLink to="edit">
                    Изменить данные
                </NavLink>

            </Base>
        </>);
}   