import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {editMedicalCondition, deleteMedicalCondition} from '../../actions/vitals'
import {merge} from 'lodash'

export default ({checkup}) => {
    const checkupDupe = merge({}, checkup)
    const [checkupDate, setDate] = useState(checkupDupe.date)
    const [checkupCondition, setCondition] = useState(checkupDupe.condition)
    const dispatch = useDispatch();
    useEffect(() => {
        setDate(checkupDupe.date)
    },[checkup.date])
    useEffect(() => {
        setCondition(checkupDupe.condition)
    },[checkup.condition])
    
    const submit = (e) => {
        e.preventDefault();
        checkupDupe.date = checkupDate;
        checkupDupe.condition = checkupCondition;
        dispatch(editMedicalCondition(checkupDupe));
        e.currentTarget.querySelectorAll('textarea').forEach(input => input.blur());
    }

    return (
        <div className="medical-condition-item">
            <i onClick={() => dispatch(deleteMedicalCondition(checkup._id))} className="fas fa-minus-circle"></i>
            <input onBlur={submit} 
                type="text" 
                className="medical-condition-date"
                onChange={e => setDate(e.target.value)} 
                value={checkupDate.slice(0,10)} 
            />
            <textarea onBlur={submit} 
                type="text" 
                className="medical-condition-condition"
                onChange={e => setCondition(e.target.value)} 
                value={checkupCondition} 
            />
        </div>
    )
};