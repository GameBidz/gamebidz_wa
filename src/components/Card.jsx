import reactLogo from "../assets/react.svg"
import React from "react";

/**
 * 
 * @param {{title: string, description: string}} props
 * @returns
 */

export function Card(props) {

    return (
        <div className="card border-4 rounded-lg flex flex-col items-center">
            <img src={reactLogo} className="w-1/2 mb-8" />
            <h3 className="self-start text-2xl font-semibold mb-8">{props.title}</h3>
            <p className="self-start text-left mb-8">{props.description}</p>
            <button className="rounded-full bg-violet-500 py-2 w-full text-white font-semibold hover:bg-violet-700 text-xl">
                AUCTION
            </button>
        </div>
    )

}