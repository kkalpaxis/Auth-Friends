import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
    console.log(props);
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = event => {
        setCredentials({...credentials, 
        [event.target.name]: event.target.value,});
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                history.push("/friends");
            })
            .catch(err => console.log(err.response));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                name="username" 
                placeholder="username" 
                onChange={handleChange}
                value={creds.username} />
            <input type="password" 
                name="password" 
                placeholder="password" 
                onChange={handleChange}
                value={creds.password} />
            <button type="submit">Log In</button>
        </form>
    )
}