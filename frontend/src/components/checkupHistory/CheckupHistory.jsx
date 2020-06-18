import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../edit_form/edit_form.css'
import DashboardStatsAddContainer from '../dashboard/dashboard_squares/dashboard_stats/DashboardStatsAddContainer'

import {fetchMedicalConditions} from '../../actions/vitals';

export default () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const checkupHistory = useSelector(state => Object.values(state.entities.vitals.medicalConditions));

    useEffect(() => {
        dispatch(fetchMedicalConditions());
        // debugger
    }, []) 
    useEffect(() => {
        dispatch(fetchMedicalConditions());
        // document.querySelector('.add-vital-outer-container').style.display = "";
        // debugger
    }, [checkupHistory.length]) 

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

    const renderCheckupHistory = () => {
        debugger
        if(checkupHistory) {
            return checkupHistory.map((history, idx) => {
                return (
                    <tr>
                        <td>{history.date.slice(0,10)}: </td>
                        <td>{history.medicalCondition}</td>
                    </tr>
                )
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
                <DashboardStatsAddContainer vital={"medicalConditions"} subVitals={["date", "medicalCondition"]} />
                <div id='my-edit-form' className='edit-board'>
                    <div className='edit-form allergies'>
                        <h1 className="edit-form-header">Checkup History</h1>
                        <table>
                            <tbody>
                            {renderCheckupHistory()}
                            </tbody>
                        </table>
                        <div className="dash__addAVital allergies" onClick={() => addVital()} >
                            <i className="fas fa-plus-circle"></i>
                            <h1>Add a Vital</h1>
                        </div>
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
