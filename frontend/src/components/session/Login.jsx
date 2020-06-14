import {connect} from 'react-redux';
import {login} from '../../actions/session';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import e from 'express';

export const Login = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.session);
    const [handle, setHandle] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            handle: handle,
            password: password
        }

        dispatch(login(user));
    }

    return (
        <div></div>
    )
    // const handleChange = (event) => {

    // }


}
