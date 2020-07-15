import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {editAllergy} from '../../actions/vitals'

export default ({allergy}) => {
    const [allergyName, setAllergy] = useState(allergy.allergy)
    const dispatch = useDispatch();

    const submit = () => {
        allergy.allergy = allergyName
        dispatch(editAllergy(allergy))
    }
    return (
        <div className="allergy-item">
            <i class="fas fa-minus-circle"></i>
            <input onBlur={() => submit()} 
                type="text" 
                onChange={e => setAllergy(e.target.value)} 
                value={allergyName} 
            />
        </div>
    )
};