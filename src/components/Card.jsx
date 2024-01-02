import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/images/${props.item.img}`} className="card--image" />
        <div className="info">    
            <h1 className="location">{props.item.location}</h1>
            <h1 className="title">{props.item.title}</h1>
            <h1>{props.item.startDate}</h1>
            <h1>{props.item.endDate}</h1>
            <h2>{props.item.description}</h2>
        </div>
        </div>
    )
}