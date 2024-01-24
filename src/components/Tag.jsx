import React from 'react';

const Tag = () => {
    return (
        <div className='rounded-lg bg-white flex py-4 px-7 mx-4 mb-4 text-sm'>
            <span className='flex items-center w-1/12'>01</span>
            <span className='flex items-center w-3/12'>www.google.com</span>
            <span className='flex items-center w-2/12'>prefixsample</span>

            <div className='w-3/12'>
                <button
                    id='dropdownDefaultButton'
                    // data-dropdown-toggle='dropdown'
                    data-dropdown-toggle='dropdown'
                    class='border bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    type='button'
                >
                    Select Tags{' '}
                    <svg
                        class='w-2.5 h-2.5 ms-3'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 10 6'
                    >
                        <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='m1 1 4 4 4-4'
                        />
                    </svg>
                </button>
            </div>
            <div
                id='dropdown'
                className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
            >
                <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-200'
                    aria-labelledby='dropdownDefaultButton'
                >
                    <li>
                        <a
                            href='#'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                            Earnings
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
            <span className='flex gap-2'>
                <div className='bg-[#605BFF] rounded flex gap-1 p-1 pl-2'>
                    <span className='font-[Figtree] text-white flex'>
                        TAG 1
                    </span>
                    <img src='assets/cross.svg' alt='cross' />
                </div>
                <div className='bg-[#605BFF] rounded flex gap-1 p-1 pl-2'>
                    <span className='font-[Figtree] text-white w-fit'>
                        TAG 2
                    </span>
                    <img src='assets/cross.svg' alt='cross' />
                </div>
            </span>
        </div>
    );
};

export default Tag;
