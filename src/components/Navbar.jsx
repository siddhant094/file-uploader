import React from 'react';
import { useState } from 'react';
import Menu from './Menu';
// import './App.css';

const Navbar = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <div>
            {drawerIsOpen && (
                <div
                    onClick={closeDrawerHandler}
                    className='backdrop w-screen h-screen z-10'
                ></div>
            )}
            {drawerIsOpen && (
                <div
                    className='bg-white w-4/6 h-screen z-20 fixed rounded-r-2xl'
                    // onClick={closeDrawerHandler}
                >
                    <Menu class='' showClose handleClose={closeDrawerHandler} />
                </div>
            )}
            <div className='flex max-sm:py-5 max-sm:px-5 md:pt-12 justify-between max-sm:bg-white'>
                <div className='flex gap-4'>
                    <button onClick={openDrawerHandler}>
                        <img
                            src='assets/burger.svg'
                            alt='burger'
                            srcset=''
                            className='md:hidden'
                        />
                    </button>
                    <span className='max-sm:hidden font-[Figtree] text-2xl font-semibold text-shadow pl-8 shadow-header'>
                        Upload CSV
                    </span>
                    <div className='md:hidden flex justify-center gap-4'>
                        <img src='assets/Subtract.svg' />
                        <span className='font-[Nunito] text-[#030229] text-2xl font-semibold flex justify-center items-center'>
                            Base
                        </span>
                    </div>
                </div>
                <div className='flex items-center md:mr-8 gap-6'>
                    <span class='material-symbols-outlined'>notifications</span>
                    <img
                        src='assets/avatar.png'
                        alt='avatar'
                        className='rounded-full h-fit max-w-fit'
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
