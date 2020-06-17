import React from 'react'
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default ({chartLines, data}) => (
    <ResponsiveContainer>
        <LineChart data={data}>
            {chartLines.map((subVital, idx) => <Line key={idx} type="monotone" dataKey={subVital} fill="#7cc5f5" /> )}
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey='date' />
            <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip/>
        </LineChart>
    </ResponsiveContainer>
);


