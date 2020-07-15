import React, {useState} from 'react'
// import editAllergy from '../../actions/vitals'

export default ({allergy}) => {
    const [allergyName, setAllergy] = useState(allergy.allergy)
    return (
        <input /*onBlur={editAllergy(allergy)}*/ 
            type="text" 
            onChange={e => setAllergy(e.target.value)} 
            value={allergyName} 
        />
    )
};