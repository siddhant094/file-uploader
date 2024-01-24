import React from 'react';

const Menu = () => {
    return (
        <div className='bg-white w-2/12 max-sm:hidden'>
            <div className='flex justify-center gap-4 my-14'>
                <img src='assets/Subtract.svg' />
                <span className='font-[Nunito] text-[#030229] text-2xl font-semibold flex justify-center items-center'>
                    Base
                </span>
            </div>
            <div className='flex flex-col gap-9 pl-6'>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Category.png' className='w-6' />
                    <span>Dashboard</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Chart.svg' className='w-6' />
                    <span>Upload</span>
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
