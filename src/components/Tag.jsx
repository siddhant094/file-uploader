import React from 'react';
import DropdownComponent from './DropdownComponent';

const Tag = ({ props }) => {
    let selected = null;
    if (props.selectedtags && props.selectedtags != '') {
        console.log(props);
        selected = props.selectedtags.split(',');
    }
    return (
        <div className='rounded-lg md:bg-white flex py-4 px-7 mx-4 mb-4 text-sm max-sm:w-full'>
            <span className='flex items-center w-1/12'>{props.id}</span>
            <div className='flex max-sm:bg-white rounded-lg max-sm:overflow-x-scroll w-full'>
                <a
                    href={`https://${props.links}`}
                    target='_blank'
                    className='flex items-center w-3/12 text-[#5B93FF] underline max-sm:w-60'
                >
                    {props.links}
                </a>
                <span className='flex items-center w-2/12 max-sm:w-40 max-sm:mr-6'>
                    {props.prefix}
                </span>
                <div className='w-3/12 max-sm:w-72'>
                    <DropdownComponent props={props.selecttags} />
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
                    {selected != null &&
                        selected.map((item) => (
                            <div className='bg-[#605BFF] rounded flex gap-1 p-1 pl-2 justify-center items-center'>
                                <span className='font-[Figtree] text-white'>
                                    {item.trim()}
                                </span>
                                <img src='assets/cross.svg' alt='cross' />
                            </div>
                        ))}
                </span>
            </div>
        </div>
    );
};

export default Tag;
