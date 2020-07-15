import {register, login} from '../../actions/session';
// import {login} from '../../actions/session';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import { clearSessionErrors } from '../../actions/session';

import './register.css'

export const Register = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearSessionErrors());
    }, [props.history])

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

    const renderErrors = () => {
        if(errors) {
            return (
                <>
                    {Object.values(errors).map((error, idx) => {
                        return (
                            <p key={idx} className="register__errors">-{error}</p>
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

        <button
          onClick={loginAsDemo}
          className="demo-button">
          Login as Demo
        </button>
         
            <form onSubmit={handleSubmit} className="register__form">
                <input
                className="register-input" 
                    type="text" 
                    value={handle} 
                    onChange ={handleChange('handle')} 
                    placeholder="Handle" /> 
                   <p className="reg-error">{errors['handle']}</p>               
                <input 
                className="register-input"
                    type="email" 
                    value={email}
                    autoComplete="username" 
                    onChange ={handleChange('email')} 
                    placeholder="Email" />
                  <p className="reg-error">{errors['email']}</p>
                <input 
                className="register-input"
                    type="password" 
                    value={password} 
                    autoComplete="new-password" 
                    onChange ={handleChange('password')}  
                    placeholder="Password" />
                  <p className="reg-error">{errors['password']}</p>
                <input 
                className="register-input"
                    type="password" 
                    value={password2}
                    autoComplete="new-password" 
                    onChange ={handleChange('password2')}  
                    placeholder="Confirm password" />
                  <p className="reg-error">{errors['password2']}</p>
                <button 
                    type="submit"
                    className="signup-button">
                    Signup
                </button>
            <NavLink className="register-nav" to="/login">Login</NavLink>
            <NavLink className="register-nav" to="/">Home</NavLink>
            </form>
            

        </div>
    )

}
