import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {editAllergy, deleteAllergy} from '../../actions/vitals'
import {merge} from 'lodash'

export default ({allergy}) => {
    const allergyDupe = merge({}, allergy)
    const [allergyName, setAllergy] = useState(allergyDupe.allergy)
    const dispatch = useDispatch();
    useEffect(() => {
        setAllergy(allergyDupe.allergy)
    },[allergy.allergy])

    const submit = (e) => {
        e.preventDefault();
        allergyDupe.allergy = allergyName;
        dispatch(editAllergy(allergyDupe));
        e.currentTarget.querySelectorAll('input[type=text]').forEach(input => input.blur());
    }

    return (
        <form onSubmit={submit} className="allergy-item">
            <i onClick={() => dispatch(deleteAllergy(allergy._id))} className="fas fa-minus-circle"></i>
            <input onBlur={submit} 
                type="text" 
                onChange={e => setAllergy(e.target.value)} 
                value={allergyName} 
            />
        </form>
    )
};