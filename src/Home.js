import React from 'react';
import { config } from '../dapp.config'
import foff from './images/foff.gif'
import eyes from './images/eyes.png'
import logo from './images/puddlegoose-outlined-logo.png'
import './styles/globals.css';
import Header from './Header';

export default function Home() {
    return (
        <div className="min-h-screen h-full w-full flex flex-col overflow-hidden">
            <Header />

            <div className="x1 hidden sm:block">
                <div className="cloud"></div>
            </div>

            <div className="x2 hidden sm:block">
                <div className="cloud"></div>
            </div>

            <div className="x3 hidden sm:block">
                <div className="cloud"></div>
            </div>

            <div className="x4 hidden sm:block">
                <div className="cloud"></div>
            </div>

            <div className="h-full w-full container max-w-5xl mx-auto flex flex-col items-center pt-4 md:pt-8 lg:pt-5">
                <div className="flex flex-col items-center max-w-4xl w-full">
                    <span className="font-coiny uppercase inline-flex items-center px-3 md:px-6 oy-2 text-3xl sm:text-2xl md:text-5xl font-medium text-center rounded transition ease-in-out delay-30 text-rose-500 hover:text-white cursor-default">
                        Minting Soon
                        <img className="ml-2 -mt-2 hidden sm:block" src={eyes} alt="" />
                    </span>

                    <div className="flex flex-col md:flex-row md:space-x-7 lg:space-x-16 space-y-0 md:space-y-0 lg:space-y-5 md:px-10 lg:px-0 items-center mt-10 lg:mt-5 w-full">
                        <img
                            src={foff}
                            alt=""
                            className="w-60 h-60 rounded-md object-cover border-4"
                        />

                        <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny text-gray-800 px-4 md:px-10 lg:px-4 md:px-0 py-10 mt-10">
                            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase text-blue-50">
                                About <span className='rainbow-text-1'>F</span>
                                <span className='rainbow-text-2'>a</span>
                                <span className='rainbow-text-3'>i</span>
                                <span className='rainbow-text-4'>r</span>
                                <span className='rainbow-text-5'>v</span>
                                <span className='rainbow-text-6'>i</span>
                                <span className='rainbow-text-1'>e</span>
                                <span className='rainbow-text-2'>w</span> Frens
                            </h2>

                            <p className="mt-6 text-lg text-blue-50 text-left">
                                {`Fairview Frens is a collection of 50 original photos of 
                  animal frens from the neighbourhood of Fairview and now living 
                  on the blockchain with their own hand-coded traits.`}
                            </p>

                            <p className="mt-6 text-lg text-blue-50 text-left">
                                {`Each fren is a sample of the wildlife you'll see in my 
                  little home district.`}
                            </p>

                            <p className="mt-6 text-lg text-blue-50 text-left">
                                {`All of the photos were taken and personally curated by 
                  nft artist “drew$y”. Our mission is to share 
                  the wonder of Fairview wildlife with the world!`}
                            </p>
                        </div>
                    </div>

                    <img className="mr-2 mt-0 pb-10 sm:mt-20" src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}
