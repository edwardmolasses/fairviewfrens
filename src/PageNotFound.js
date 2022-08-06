import React from 'react';
import { Link } from "react-router-dom";
import logo from './images/puddlegoose-outlined-logo.png'
import './styles/globals.css';

import Header from './Header';

export default function PageNotFound() {
    return (
        <div className="min-h-screen h-full w-full flex flex-col overflow-hidden">
            <Header />
            <div className="grid h-screen place-items-center">
                <div className="font-coiny uppercase font-bold text-white text-3xl">
                    Sorry no frens here, <Link className="text-rose-500 hover:text-white transition ease-in-out delay-30" to="/">maybe try over here!</Link>
                </div>
                <div className='content-center'>
                    <img className="mt-0 pb-10 sm:mt-20" src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}
