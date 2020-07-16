import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../edit_form/edit_form.css'
import DashboardStatsAddContainer from '../dashboard/dashboard_squares/dashboard_stats/DashboardStatsAddContainer'
import AllergyComponent from './AllergyComponent'
import {fetchAllergies} from '../../actions/vitals';
import './allergies.css';

export default () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const allergies = useSelector(state => Object.values(state.entities.vitals.allergies));
    // const [handle, setHandle] = useState("");
    // const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(fetchAllergies());
    }, []) 

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
                            <li key={idx} className="allergies__errors">{error}</li>
                        )
                    })}
                </>
            )
        }
    }

    const renderAllergies = () => {
        if(allergies) {
            return allergies.map((allergy, idx) => {
                return <AllergyComponent key={idx} allergy={allergy} /> 
            })
        }
    }

    const addVital = () => {
      
        let container = document.querySelector('.add-vital-outer-container');
        container.style.display = (container.style.display === '') ? "block" : "";
        const input = document.querySelector('.add-vital-outer-container input');
        input.focus();
    }

    return (
            <div className='whole-edit-page'>
                <DashboardStatsAddContainer vital={"allergies"} subVitals={["allergy"]} />
                <div id='my-edit-form' className='edit-board'>
                    <div className='edit-form allergies'>
                        <h1 className="edit-form-header"><i class="fas fa-allergies allergic"></i>Allergies</h1>
                        <div className="dash__addAVital allergies" onClick={() => addVital()} >
                            <i className="fas fa-plus-circle"></i>
                            <h1>Add Allergy</h1>
                        </div>
                        <h5 className="edit-allergies-instructions">You may click on individual allergies to edit them. When you are finished with changes you may save them by clicking/tabbing out of the field, or pressing enter.</h5>
                        <ul className="allergies-list">
                            {renderAllergies()}
                        </ul>
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
