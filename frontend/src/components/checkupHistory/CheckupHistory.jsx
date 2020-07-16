import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../edit_form/edit_form.css'
import DashboardStatsAddContainer from '../dashboard/dashboard_squares/dashboard_stats/DashboardStatsAddContainer'
import CheckupHistoryItem from './CheckupHistoryItem'

import {fetchMedicalConditions, clearVitalsErrors} from '../../actions/vitals';

export default () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const checkupHistory = useSelector(state => Object.values(state.entities.vitals.medicalConditions));

    useEffect(() => {
        dispatch(fetchMedicalConditions());
    }, []) 
    useEffect(() => {
        // fetch updated conditions after uploading successfully
        dispatch(fetchMedicalConditions());
    }, [checkupHistory.length]); 


    const handleSubmit = (event) => {
        event.preventDefault();
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
     
        if(checkupHistory) {
            return checkupHistory.map((checkup, idx) => {
                return (
                    <CheckupHistoryItem checkup={checkup} />

                )
            })
        }
    }

    const addVital = () => {
        let container = document.querySelector('.add-vital-outer-container');
        container.style.display = (container.style.display === '') ? "block" : "";
        const input = document.querySelector('.add-vital-outer-container textarea');
        input.focus();
    }

    return (
            <div className='whole-edit-page'>
                <DashboardStatsAddContainer vital={"medicalConditions"} subVitals={["condition"]} />
                <div id='my-edit-form' className='edit-board'>
                    <div className='edit-form allergies'>
                        <h1 className="edit-form-header"><i class="fas fa-clipboard-check"></i>Checkup History</h1>
                        <div className="dash__addAVital allergies checkup" onClick={() => addVital()} >
                            <i className="fas fa-plus-circle"></i>
                            <h1>Add Checkup</h1>
                        </div>
                        <table>


                            <tbody>
                                <tr className='header-tr'>
                                    <th>Date</th>
                                    <th className='checkup-description'>Description</th>
                                </tr>
                            {renderCheckupHistory()}
                            </tbody>
                        </table>
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
