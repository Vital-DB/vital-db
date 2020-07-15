import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {editAllergy, deleteAllergy} from '../../actions/vitals'

export default ({allergy}) => {
    const [allergyName, setAllergy] = useState(allergy.allergy)
    const dispatch = useDispatch();

    const submit = () => {
        allergy.allergy = allergyName
        dispatch(editAllergy(allergy))
    }
    return (
        <div className="allergy-item">
            <i onClick={() => dispatch(deleteAllergy(allergy._id))} className="fas fa-minus-circle"></i>
            <input onBlur={() => submit()} 
                type="text" 
                onChange={e => setAllergy(e.target.value)} 
                value={allergyName} 
            />
        </div>
    )
};