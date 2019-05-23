import React from 'react'
import './Lead.css';

const lead = (props) => {
    return (
        <tr className='Lead'>
            <td onClick={props.click}>{props.name}, {props.age} is valued at <b>{(Math.floor(Math.random() * (51))+50)*100}</b></td>
            <td>{props.children}</td>
            <td><input type="text" onChange={props.changed} value={props.name} /></td>
        </tr>
    )
}

export default lead;