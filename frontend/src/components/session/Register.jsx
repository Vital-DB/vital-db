import {register} from '../../actions/session';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './register.css'

export const Register = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.session);
    const [handle, setHandle] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            handle,
            email,
            password,
            password2
        }
        dispatch(register(user));
    }

    const handleChange = (field) => {
        return ((event) => {
            switch (field) {
                case "handle":
                    setHandle(event.currentTarget.value);
                    break;
                case "email":
                    setEmail(event.currentTarget.value);
                    break;
                case "password":
                    setPassword(event.currentTarget.value);
                    break;
                case "password2":
                    setPassword2(event.currentTarget.value);
                    break;
                default:
                    break;
            }
        });
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="login__form">
                <input 
                    type="text" 
                    value={handle} 
                    onChange ={handleChange('handle')} className="login__input--handle universal__input" 
                    placeholder="Username" />
                <input 
                    type="text" 
                    value={email} 
                    onChange ={handleChange('email')} className="login__input--email universal__input" 
                    placeholder="Email" />
                <input 
                    type="text" 
                    value={password} 
                    onChange ={handleChange('password')} className="login__input--password universal__input" 
                    placeholder="Password" />
                <button 
                    type="submit"
                    className="universal__button login__button">
                    Login
                </button>
            </form>
        </div>
    )

}
