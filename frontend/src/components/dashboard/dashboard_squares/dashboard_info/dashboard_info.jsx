import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './dashboard_info.css'

export default (props) => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
  
    const infos = {
        LDL: "Known as bad cholesterol, LDL builds up inside the walls of your arteries and increases heart disease. An LDL of 190 or more is considered highly at risk. Diet, exercise and sometimes even medication can help lower your LDL.",
        HDL: "The 'good' cholesterol, HDL protects against heart disease and removes LDL from your blood. Exercise and medicines like statins can help raise these levels.",
        total: "A summary of LDL, HDL and other lipid components. A total cholesterol number gives you a good gauge on where your health levels are at.",
        triglycerides: "A normal level is below 150. Triglycerides are basically fat molecules inside your body. The lower your fat percentage, the lower triglycerides you will have, decreasing your risk of coronary artery disease.",
        systolic: "Normal systolic levels are less than 120. This number tells you how much pressure your blood is pushing against each artery wall each time your heart beats.",
        diastolic: "Normal diastolic levels are less than 80. This number indicates how mmuch pressure your blood is pushing against each artery wall each time your heart is resting between each heartbeat.",

    }

    const dataKeys = {
        cholesterolLevels: "Cholesterol",
        bloodPressureLevels: "Blood Pressure",
        weights: "Weight",
        vitaminDLevels: "Vitamin D",
        temperatures: "Body Temperature",
        restingHeartRates: "Resting Heart Rate"
    }

    const dataKeyInfo = {
        cholesterolLevels: "Cholesterol readings are a good indication of your heart health. Healthy cholesterol reduces your chances of heart disease and having a stroke. You should get your cholesterol checked once every 5 years once you past 20 years old.",
        bloodPressureLevels: "Blood pressure is the force of blood flowing through your veins. High blood pressure can damage your circulatory system which can lead to heart attacks or strokes.",
        weights: "Healthy weight levels depend on a lot of factors like height and age. Recommended levels shown will not account for these factors and will only show weight recommended by the health department based on gender.",
        vitaminDLevels: "Vitamin D is critical to the human body, it helps us absorb calcium and is thereby necessary for bone, teeth and muscle strength. It is present in some foods but on average, most of it is produced when the sun's ultraviolet rays hit our skin and force our body to produce it.",
        temperatures: "Body temperature is critical to health. High body temperatures over 100.4°F usually indicate you have a fever cause either by illness or infection. 'Normal' temperatures usually fun everywhere between 97°F and 99°F. Readings that are lower than 95°F can be an indicator of hypothermia.",
        restingHeartRates: "Normal resting heart rate runs from 60 to 100 beats per minute. Lower resting heart rates signify your heart is running efficiently and your cardiovascular fitness levels are good."
    }

    const displayMainKey = () => {
        return (
            <div className="dataCard dataCard--4">
                <h2 className="dataKey--title">{dataKeys[props.dataKey]}</h2>
                <p className="dataKey__p--description">{dataKeyInfo[props.dataKey]}</p>
            </div>
        )
    }

    const restricted = ["All", "BPM", "degrees", "level", "pounds"];

    const displaySubDataKeys = () => {
        return props.subDataKeys.map((dataKey, idx) => {
            if(!restricted.includes(dataKey)) {
                return (
                    <div key={idx} 
                    className={`dataCard dataCard--${idx}`}
                    >
                        <h2 className="dataKey--title">{dataKey}</h2>
                        <p className="dataKey__p--description">
                            {infos[dataKey]}
                        </p>
                    </div>
                )
            }
        })

    }

    return (
        <div className="dashboardInfo">
            {displayMainKey()}
            {displaySubDataKeys()}
        </div>
    )
}
