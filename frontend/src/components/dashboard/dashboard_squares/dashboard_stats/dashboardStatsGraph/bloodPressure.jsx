import React from 'react'

export default function bloodPressure() {
    return (
        <ResponsiveContainer>
        <LineChart data={data}>
            <Line type="monotone" dataKey={"systolic"} fill="#7cc5f5" />
            <Line type="monotone" dataKey={"diastolic"} fill="#7cc5f5" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey='date' />
            <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
        </LineChart>
        </ResponsiveContainer>
    )
}


