import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/images/${props.item.img}`} className="card--image" />
        </div>
    )
}