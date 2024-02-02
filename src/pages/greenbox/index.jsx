import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
export default function Greenbox() {
    const navigate = useNavigate()
    const [bgColor, setBgColor] = useState('green')

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ backgroundColor: "red", width: "30px", height: "30px", cursor: "pointer" }} onClick={() => setBgColor("red")}></div>
                <div style={{ backgroundColor: "green", width: "30px", height: "30px", cursor: "pointer" }} onClick={() => setBgColor("green")}></div>
                <div style={{ backgroundColor: "blue", width: "30px", height: "30px", cursor: "pointer" }} onClick={() => setBgColor("blue")}></div>
            </div>
            <hr />

            <div style={bgColor && { color: "white", backgroundColor: bgColor, padding: "20px" }}>

                <h1>Greenbox-Page</h1>
                <h3>becomes "{bgColor}" by state </h3>

                <button onClick={() => navigate('/bluebox')}>Blue box-Page</button>
                <button onClick={() => navigate('/')}>Red box-Page</button>
            </div>

        </div>
    )
}
