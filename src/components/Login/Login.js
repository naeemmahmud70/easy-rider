import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: '',
        name: '',
        photo: '',
        error: '',
        success: false
    });
    console.log(user.name, user.email, user.password)
    const handleBlur = (e) => {
        let isFormValid;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordHasNumber
        }
        if (e.target.name === 'name') {
            isFormValid = e.target.value.length > 4;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <div>
            <form style={{ textAlign: 'center' }} >
                <input name="name" type="text" onBlur={handleBlur} placeholder="enter your name" />
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="enter your email" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="enter your password" required />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;