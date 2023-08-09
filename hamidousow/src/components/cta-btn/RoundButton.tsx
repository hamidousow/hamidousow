import React from 'react'
import { Link } from 'react-router-dom'

export default function RoundButton (props: { link: string}) {
    return (
        <div className="container-button d-flex justify-content-end">
            <Link className="round-btn d-flex justify-content-center align-items-center" to='#projet'>↓</Link> 
        </div>
    )
}
