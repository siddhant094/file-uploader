import React, { useState } from 'react';

export default function DropdownComponent(props) {
    const [isVisible, setIsVisible] = useState(false);
    let data = null;
    if (props.props) {
        data = props.props.split(',');
    } else {
        data = null;
    }
    return (
        <div className='inline-flex bg-white border rounded-md'>
            <a
                // href='#'
                onClick={() => setIsVisible(!isVisible)}
                className='px-4 py-1 text-sm text-[#231F20] rounded-l-md cursor-pointer'
            >
                Select Tags
            </a>

            <div className='relative'>
                <button
                    type='button'
                    className='inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50'
                    onClick={() => setIsVisible(!isVisible)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-4 h-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19 9l-7 7-7-7'
                        />
                    </svg>
                </button>
                {isVisible && data != null && (
                    <div className='absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg'>
                        <div className='p-2'>
                            {data != null &&
                                data.map((item) => (
                                    <a
                                        // href='#'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsVisible(false);
                                        }}
                                        className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer'
                                    >
                                        {item.trim()}
                                    </a>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
