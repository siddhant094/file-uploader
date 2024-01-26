import React from 'react';
import DropdownComponent from './DropdownComponent';

const Tag = ({ props }) => {
    let selected = null;
    if (props.selectedtags && props.selectedtags != '') {
        console.log(props);
        selected = props.selectedtags.split(',');
    }
    return (
        <div
            // className='rounded-lg md:bg-white grid grid-flow-col gap-4 py-4 px-7 mx-4 mb-4 max-sm:pl-0 max-sm:ml-0 text-sm max-sm:overflow-x-scroll'
            className='rounded-lg md:bg-white grid grid-flow-col gap-4 py-4 px-7 mx-4 mb-4 max-sm:pl-0 max-sm:ml-0 text-sm'
            key={props.id}
        >
            <span className='grid items-center max-sm:w-14 max-sm:absolute max-sm:bg-[#F2F2F2] max-sm:h-16 max-sm:pl-5 max-sm:z-10'>
                {props.id}
            </span>
            <div className='grid grid-flow-col grid-cols-4 gap-2 max-sm:bg-white rounded-lg max-sm:w-[1460px] max-sm:py-4 max-sm:px-7 max-sm:ml-16'>
                <a
                    href={`https://${props.links}`}
                    target='_blank'
                    className='grid items-center text-[#5B93FF] underline'
                >
                    {props.links}
                </a>
                <span className='grid items-center w-2/12'>{props.prefix}</span>
                <div className='flex items-center'>
                    <DropdownComponent props={props.selecttags} />
                </div>
                {/* <div
                    id='dropdown'
                    className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700'
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
                </div> */}
                <span className='flex gap-2 flex-wrap max-sm:w-96 md:w-52'>
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
