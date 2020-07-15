import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {editAllergy} from '../../actions/vitals'

export default ({allergy}) => {
    const [allergyName, setAllergy] = useState(allergy.allergy)
    const dispatch = useDispatch();

    const submit = () => {
        debugger
        allergy.allergy = allergyName
        dispatch(editAllergy(allergy))
    }
    return (
        <input onBlur={() => submit()} 
            type="text" 
            onChange={e => setAllergy(e.target.value)} 
            value={allergyName} 
        />
    )
};