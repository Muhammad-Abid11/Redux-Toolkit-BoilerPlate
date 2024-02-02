import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateTheme } from '../../store/themeslice'
//updatetheme k function jo themeSlice sy export hua usy dispatch me use krengy agar apko 
// "redux" ki state ko change kr hai

export default function Redbox() {
    const navigate = useNavigate()

    const [bgColor, setBgColor] = useState('red')
    // const theme = useSelector((state) => console.log(state.theme))
    const theme = useSelector((state) => state.theme)
    // console.log("theeme", theme)
    const dispatch = useDispatch()
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ backgroundColor: "red", width: "30px", height: "30px", cursor: "pointer" }} onClick={() => dispatch(updateTheme("red"))}></div>
                <div style={{ backgroundColor: "green", width: "30px", height: "30px", cursor: "pointer" }} onClick={() => dispatch(updateTheme("green"))}></div>
                <div style={{ backgroundColor: "blue", width: "30px", height: "30px", cursor: "pointer" }} onClick={
                    () => dispatch(updateTheme("blue"))}>
                    {/* "dispatch" k under "updateTheme" k function call krengy q k wo "redux" ne btaya hai */}
                </div>

            </div>
            <hr />

            <div style={theme && { color: "white", backgroundColor: theme, padding: "20px" }}>

                <h1>Redbox-Page</h1>
                <h3>becomes "{theme}" by Redux-State </h3>
                <button onClick={() => navigate('/greenbox')}>Green box-Page</button>
                <button onClick={() => navigate('/bluebox')}>Blue box-Page</button>
            </div>

            <p>is page per theme change redux k through ho rhi hai . or is page ko change krne sy bhi mtlb green-page sy wapas yhn ane per bhi iska color same rhyga</p>
        </div>
    )
}
