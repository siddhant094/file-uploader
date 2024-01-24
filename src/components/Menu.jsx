import React from 'react';

const Menu = () => {
    return (
        <div className='bg-white w-2/12'>
            <div className='flex'>
                <img src='assets/Subtract.svg' />
                <span className='font-[Nunito] text-[#030229] text-2xl font-semibold'>
                    Base
                </span>
            </div>
            <div className='flex flex-col gap-9 pl-6'>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Category.png' />
                    <span>Dashboard</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Chart.svg' />
                    <span>Upload</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Ticket.png' />
                    <span>Invoice</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Document.png' />
                    <span>Schedule</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Calendar.png' />
                    <span>Calendar</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Notification.png' />
                    <span>Notification</span>
                </div>
                <div className='flex font-[Nunito] font-semibold text-[#9A9AA9] gap-4'>
                    <img src='assets/Setting.png' />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    );
};

export default Menu;
