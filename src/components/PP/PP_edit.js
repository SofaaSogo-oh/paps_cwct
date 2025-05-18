import React, { useState } from "react";

import "../../css/blocks.css"
import axios from "axios";

export default function PP_edit() {
    const [profilePicture, set_profilePicture] = useState(null);
    const [firstName, set_firstName] = useState('');
    const [secondName, set_secondName] = useState('');
    const [middleName, set_middleName] = useState('');
    const [phoneNumber, set_phoneNumber] = useState('');
    const [address, set_addrress] = useState('');

    const [message, set_message] = useState('');
    const [errMsg, set_errMsg] = useState('');

    const sendProfileInfo = async () => {
        const formData = new FormData();

        if (profilePicture) {
            formData.append("profile_picture", profilePicture);
        }

        formData.append('first_name', firstName);
        formData.append('second_name', secondName);
        formData.append('middle_name', middleName);

        formData.append('phone_number', phoneNumber)
        formData.append('address', address);

        axios.post('/api/personal_data', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
            set_message(response);
        }).catch(function(error) {
            set_errMsg
        });
    }
}
