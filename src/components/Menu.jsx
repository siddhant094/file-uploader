import React, { useState } from 'react';

const Menu = (props) => {
    return (
        <div className={`bg-white md:min-h-screen ${props.class}`}>
            <div className='flex justify-around gap-4 my-14'>
                <div className='flex justify-center gap-4'>
                    <img src='assets/Subtract.svg' />
                    <span className='font-[Nunito] text-[#030229] text-2xl font-semibold flex justify-center items-center'>
                        Base
                    </span>
                </div>
                {props.showClose && (
                    <button onClick={props.handleClose}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='40'
                            height='40'
                            viewBox='0 0 40 40'
                            fill='none'
                        >
                            <path
                                d='M25.3424 14.6568L19.6855 20.3137M19.6855 20.3137L14.0287 14.6568M19.6855 20.3137L14.0287 25.9706M19.6855 20.3137L25.3424 25.9706'
                                stroke='#999CA0'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                    </button>
                )}
            </div>
            <div className='flex flex-col [&_div]:py-4 [&_div]:pl-6'>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Category.png' className='w-6' />
                    <span>Dashboard</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4 bg-gradient'>
                    <img src='assets/Chart.svg' className='w-6' />
                    <span className='text-[#605BFF] z-10'>Upload</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Ticket.png' className='w-6' />
                    <span>Invoice</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Document.png' className='w-6' />
                    <span>Schedule</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Calendar.png' className='w-6' />
                    <span>Calendar</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Notification.png' className='w-6' />
                    <span>Notification</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Setting.png' className='w-6' />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    );
};

export default Menu;
