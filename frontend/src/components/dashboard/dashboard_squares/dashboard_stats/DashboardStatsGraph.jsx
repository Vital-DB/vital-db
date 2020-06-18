import React from 'react'
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer, Tooltip, ReferenceArea, Label } from 'recharts';
import {merge} from 'lodash';

export default ({chartLines, data}) => {
    const colors = ["#FF4E66","#FF5733","#86FF33","#6337D8"];

    // use with attribute 'content={<CustomTooltip />' on line, for custom tooltip}
    // const CustomTooltip = ({ payload, label, active }) => {
    //     // debugger
    //     if (active) {
    //         return (
    //             <div className="custom-tooltip">
    //                 <p className="label">{`${label}`}</p>
    //             </div>
    //         );
    //     }
    
    //     return null;
    // }

    for (let i = 0; i < data.length; i++){
        let rawDate = data[i].date;
        let date = rawDate.slice(0,10);
        data[i].date = date;
    }

    // debugger

    const recommendedRanges = {
        LDL: {
            min: 40,
            max: 100
        },
        HDL: {
            min: 40,
            max: 60
        },
        total: {
            min: 0,
            max: 170
        },
        triglycerides: {
            min: 100,
            max: 200
        },
        systolic: {
            min: 100,
            max: 200
        },
        diastolic: {
            min: 45,
            max: 80
        },
        BPM: {
            min: 60,
            max: 100
        },
        degrees: {
            min: 95.9,
            max: 98.5
        },
        level: {
            min: 40,
            max: 80
        },
        pounds: {
            min: 100,
            max: 200,
        },
    }
    // debugger

    const referenceLines = () => {
        // debugger
        if(chartLines.length === 1) {
            let subVital = chartLines[0];
                if(subVital !== "value") {
                    return (
                        <ReferenceArea 
                            y1={recommendedRanges[subVital].min} 
                            y2={recommendedRanges[subVital].max} 
                            fill="white" 
                            // stroke="green"
                            opacity={0.4}
                            alwaysShow={true}>
                                <Label value={`Highest recommended ${subVital}`} 
                                position="insideTopLeft" />
                                <Label value={`Lowest recommended ${subVital}`} position="insideBottomLeft" />
                        </ReferenceArea>
                    )
                }
            }
    }

    return (
        <ResponsiveContainer>
            <LineChart data={data} >
                {referenceLines()}

                {chartLines.map((subVital, idx) => {
                return (
                        <Line 
                            key={idx} 
                            filterNull={true} 
                            connectNulls={true} 
                            activeDot={{ strokeWidth: 2, r: 10 }} 
                            dot={false} 
                            pointstype="monotone" 
                            strokeWidth="5" 
                            dataKey={subVital} 
                            stroke={colors[idx]} /> 
                        )
                })}
                
                {/* <ReferenceArea y1={200} y2={300} fill="red" /> */}
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
                
                <Tooltip 
                    contentStyle={{opacity: 1, backgroundColor: "white", borderRadius: "5px", boxShadow: "1px 1px 1px #2E3030"}} 
                    offset={20} 
                    isAnimationActive={true} />
            </LineChart>
        </ResponsiveContainer>
    )
}


