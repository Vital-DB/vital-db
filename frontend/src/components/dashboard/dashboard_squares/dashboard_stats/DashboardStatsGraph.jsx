import React, {useState, useEffect} from 'react'
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer, Tooltip, ReferenceArea, Label } from 'recharts';
import {merge} from 'lodash';

export default ({chartLines, data}) => {
    const colors = ["#FF4E66","#FF5733","#86FF33","#6337D8"];

    const [newData, setNewData] = useState(data);

    useEffect(() => {
        newData.map((element, idx) => {
            setNewData((prevState) => {
                let currDate = new Date(prevState[idx].date);

                prevState[idx].date = `${currDate.getMonth() + 1}-${currDate.getDate()}-${currDate.getFullYear()}`;
                return ([
                    ...prevState
                ])
            })
        });
        
    }, [])


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
            min: 100,
            max: 200
        },
        value: {
            min: 0,
            max: 300,
        }
    }
    // debugger

    const referenceLines = () => {
        // debugger
        if(chartLines.length === 1) {
            let subVital = chartLines[0];
                return (
                    <ReferenceArea 
                        y1={recommendedRanges[subVital].min} 
                        y2={recommendedRanges[subVital].max} 
                        fill="#32CD32" 
                        // stroke="green"
                        opacity={0.5}
                        >
                        <Label value={`Highest recommended ${subVital}`} 
                        position="insideTopLeft" />
                        <Label value={`Lowest recommended ${subVital}`} position="insideBottomLeft" />
                    </ReferenceArea>
                )
            }
    }

    return (
        <ResponsiveContainer>
            <LineChart data={newData}>
                {referenceLines()}

                {chartLines.map((subVital, idx) => {
                    {/* debugger */}
                return (
                        <Line 
                            key={idx} 
                            filterNull={true} 
                            connectNulls={true} 
                            activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} 
                            dot={false} 
                            pointstype="monotone" 
                            strokeWidth="5" 
                            dataKey={subVital} 
                            stroke={colors[idx]} /> 
                        )
                })}
                
                {/* <ReferenceArea y1={200} y2={300} fill="red" /> */}
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis dataKey="date"/>
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                
                <Tooltip 
                    contentStyle={{opacity: .99, backgroundColor: "#40B5A3", borderRadius: "5px", boxShadow: "1px 1px 1px #2E3030"}} 
                    offset={20} 
                    isAnimationActive={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}


