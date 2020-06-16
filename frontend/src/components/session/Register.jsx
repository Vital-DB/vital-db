import {register} from '../../actions/session';
import {login} from '../../actions/session';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './register.css'

export const Register = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    
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

    const renderErrors = () => {
        if(errors) {
            return (
                <>
                    {Object.values(errors).map((error, idx) => {
                        return (
                            <p key={idx} className="register__errors">{error}</p>
                        )
                    })}
                </>
            )
        }
    }

    const loginAsDemo = () => {
        let demo = {
            handle: "demo",
            password: "password"
        }
        dispatch(login(demo));
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="register__form">
                <input
                className="register-input" 
                    type="text" 
                    value={handle} 
                    onChange ={handleChange('handle')} className="login__input--handle universal__input" 
                    placeholder="Username" />
                <input 
                className="register-input"
                    type="email" 
                    value={email}
                    autoComplete="username" 
                    onChange ={handleChange('email')} className="login__input--email universal__input" 
                    placeholder="Email" />
                <input 
                className="register-input"
                    type="password" 
                    value={password} 
                    autoComplete="new-password" 
                    onChange ={handleChange('password')} className="login__input--password universal__input" 
                    placeholder="Password" />
                <input 
                className="register-input"
                    type="password" 
                    value={password2}
                    autoComplete="new-password" 
                    onChange ={handleChange('password2')} className="login__input--confirm-password universal__input" 
                    placeholder="Confirm password" />
                <button 
                    type="submit"
                    // className="universal__button login__button"
                    className="signup-button"
                    >
                    Signup
                </button>
            </form>
            {/* <div className="navlinks"> */}
            <NavLink className="register-nav" to="/login">Login</NavLink>
            <NavLink className="register-nav" to="/">Home</NavLink>
            {/* </div> */}
            <button 
                onClick={loginAsDemo}
                className="universal__button login__button">
                Login as Demo
            </button>
           
            {renderErrors()}
        </div>
    )

}
