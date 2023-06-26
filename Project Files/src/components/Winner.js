import React from 'react';
import "./winners.css";

export default function Winner(props) {
    return (
    <>
        <div className="containerr">
            <img src={props.photo} alt="winner1"/>
            <span>{props.Name}</span>
            <span>Branch : {props.branch}</span>
            <span>ABCD</span>
        </div>
    </>
    );
}