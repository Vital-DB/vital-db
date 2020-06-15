import {login} from '../../actions/session';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const Login = () => {
    const dispatch = useDispatch();
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
        if(errors){
            return (
                <>
                    {errors.map((error, idx) => {
                        return (
                            <p key={idx} className="login__errors">{error}</p>
                        )
                    })}
                </>
            )
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login__form">
                <input 
                    type="text" 
                    value={handle} 
                    onChange ={handleChange('handle')} className="login__input--handle universal__input" 
                    placeholder="User handle" />
                <input 
                    type="text" 
                    value={password}
                    onChange ={handleChange('password')} className="login__input--password universal__input" 
                    placeholder="User password" />

                <button 
                    type="submit"
                    className="universal__button login__button">
                    Login
                </button>
            </form>
            {renderErrors()}
        </div>
    )
}
