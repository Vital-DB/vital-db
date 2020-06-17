import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './allergies.css'

import {fetchAllergies} from '../../actions/vitals';

export default () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const allergies = useSelector(state => Object.values(state.entities.vitals.allergies));
    // const [handle, setHandle] = useState("");
    // const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(fetchAllergies());
        // debugger
    }) // commented out the ,[] that was here (to reduce console warning)

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(allergies(user));
    }

    const renderErrors = () => {
        if(errors) {
            return (
                <>
                    {Object.values(errors).map((error, idx) => {
                        return (
                            <p key={idx} className="allergies__errors">{error}</p>
                        )
                    })}
                </>
            )
        }
    }

    const renderAllergies = () => {
        if(allergies) {
            return allergies.map((allergy, idx) => {
                return <p>{allergy.allergy}</p>
            })
        }
    }


    return (
        <div className="allergies">
            <NavLink to="/register">Signup</NavLink>
            <NavLink to="/">Home</NavLink>
            {renderErrors()}

            {renderAllergies()}
        </div>
    )
}
