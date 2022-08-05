import React from 'react';
import { Link } from "react-router-dom";
import './styles/globals.css';

export default function PageNotFound() {
    return (
        <div className="grid h-screen place-items-center">
            <div className="font-coiny uppercase font-bold text-white text-3xl">
                Sorry no frens here, <Link className="text-rose-500 hover:text-white" to="/">maybe try over here!</Link>
            </div>
        </div>
    )
}
