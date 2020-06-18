import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../edit_form/edit_form.css'
import DashboardStatsAddContainer from '../dashboard/dashboard_squares/dashboard_stats/DashboardStatsAddContainer'

import {fetchAllergies} from '../../actions/vitals';

export default () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const allergies = useSelector(state => Object.values(state.entities.vitals.allergies));
    // const [handle, setHandle] = useState("");
    // const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(fetchAllergies());
    }, []) // commented out the ,[] that was here (to reduce console warning)

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
                return <p key={idx}>{allergy.allergy}</p>
            })
        }
    }

    const addVital = () => {
        // debugger
        let container = document.querySelector('.add-vital-outer-container');
        container.style.display = (container.style.display === '') ? "block" : "";
    }

    return (
            <div className='whole-edit-page'>
                <DashboardStatsAddContainer vital={"allergies"} subVitals={["allergy"]} />
                <div id='my-edit-form' className='edit-board'>
                    <div className='edit-form allergies'>
                        <h1 className="edit-form-header">Allergies</h1>
                        <div className="dash__addAVital allergies" onClick={() => addVital()} >
                            <i className="fas fa-plus-circle"></i>
                            <h1>Add a Vital</h1>
                        </div>
                        {renderAllergies()}
                    </div>
                    <div className='pencil'>
                        <div className='pencil-eraser'></div>
                        <div className='pencil-body'></div>
                        <div className='pencil-tip'></div>
                    </div>
                </div>
            </div>
        )
}
