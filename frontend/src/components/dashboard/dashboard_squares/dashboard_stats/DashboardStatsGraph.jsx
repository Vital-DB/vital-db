import React from 'react'
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

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

    return (
        <ResponsiveContainer>
            <LineChart data={data}>
                {chartLines.map((subVital, idx) => <Line key={idx} filterNull={true} connectNulls={true} activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} dot={false} pointstype="monotone" strokeWidth="5" dataKey={subVital} stroke={colors[idx]} /> )}
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey='date' />
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                <Tooltip contentStyle={{opacity: .99, backgroundColor: "#40B5A3", borderRadius: "5px", boxShadow: "1px 1px 1px #2E3030"}}cursor={false} offset="70" isAnimationActive={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}


