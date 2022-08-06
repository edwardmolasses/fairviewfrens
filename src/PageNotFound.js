import React from 'react';
import { Link } from "react-router-dom";
import './styles/globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

export default function PageNotFound() {
    return (
        <div className="min-h-screen h-full w-full flex flex-col overflow-hidden">
            <Header />
            <div className="grid h-screen place-items-center max-h-4 mt-20">
                <div className="font-coiny uppercase font-bold text-white text-3xl mb-20">
                    Sorry no frens here, <Link className="text-rose-500 hover:text-white transition ease-in-out delay-30" to="/">maybe try over here!</Link>
                </div>
                <div className='content-center'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
