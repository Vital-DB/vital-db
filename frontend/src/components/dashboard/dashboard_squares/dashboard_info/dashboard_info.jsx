import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './dashboard_info.css'

export default (props) => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
  

    const renderAllergies = () => {
        
    }


    return (
        <div className="dashboardInfo">
            <h1>hello</h1>
        </div>
    )
}
