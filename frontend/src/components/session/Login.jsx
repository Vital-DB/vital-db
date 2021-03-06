import {login} from '../../actions/session';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './login.css';

import { clearSessionErrors } from '../../actions/session';

export const Login = (props) => {

   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearSessionErrors());
    }, [props.history])

    const errors = useSelector(state => state.errors.session);
    const [handle, setHandle] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            handle,
            password
        }
        dispatch(login(user));
    }

    const handleChange = (field) => {
        return ((event) => {
            switch (field) {
                case "handle":
                    setHandle(event.currentTarget.value);
                    break;
                case "password":
                    setPassword(event.currentTarget.value);
                    break;
                default:
                    break;
            }
        });
    }

  const renderErrors = () => {
    return (
      <ul className="login_errors">
        {Object.values(errors).map((error, idx) => (
          <li key={`error-${idx}`} className="login_error">
            {error}
          </li>
        ))}
      </ul>
    );
  };

    // const renderErrors = () => {
    //     // if(errors) {
    //         return (
    //             <ul>
    //                 {Object.values(errors).map((error, idx) => ( 
    //                     // return (
    //                         <li key={idx} className="login__errors">{error}</li>
    //                     // )
    //                  ))}
    //             <ul/>
    //         )
    //     {/* } */}
    // }

    const loginAsDemo = () => {
        let demo = {
            handle: "demo",
            password: "password"
        }
        dispatch(login(demo));
    }


    return (
        <div className="login">

        <button
          onClick={loginAsDemo}
          className="demo-button">
          Login as Demo
            </button>
            <form onSubmit={handleSubmit} className="login__form">
                <input 
                    type="text" 
                    value={handle} 
                    onChange={handleChange('handle')} className="login-input"  
                    placeholder="User handle" />
                <p className="reg-error">{errors['handle']}</p> 
                <input 
                    type="password" 
                    value={password}
                    onChange={handleChange('password')} className="login-input" 
                    placeholder="User password" />
                <p className="reg-error">{errors['password']}</p>
                <button 
                    type="submit"
                    className="login-button">
                    Login
                </button>


            <NavLink className="login-nav" to="/register">Signup</NavLink>
            <NavLink className="login-nav" to="/">Home</NavLink>
            </form>
        </div>
    )
}
