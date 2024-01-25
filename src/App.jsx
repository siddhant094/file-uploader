import { useState } from 'react';
import { useRef } from 'react';

import Papa from 'papaparse';
import Menu from './components/Menu';
import DropdownComponent from './components/DropdownComponent';
import Navbar from './components/Navbar';
import Tag from './components/Tag';
import { TailSpin } from 'react-loader-spinner';

import './App.css';

function App() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    // dadads
    const inputRef = useRef(null);

    const [loading, setLoading] = useState('default');
    const [data, setData] = useState([]);

    const buttonClickHandler = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file || file.type != 'text/csv') {
            event.target.value = null;
            console.log('error parsing file');
            return;
        }
        setLoading('loading');
        Papa.parse(file, {
            header: true,
            transformHeader: function (h) {
                return h.replace(' ', '');
            },
            complete: (results) => {
                setData(results.data);
                console.log(results);
            },
        });
        setLoading('disabled');
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        console.log('first');
    };

    return (
        <div>
            {/* yahi hai */}
            <div className='flex bg-neutral-50 max-sm:bg-[#FAFAFB]'>
                <Menu />
                {/* <Navbar /> */}

                <div className='w-full'>
                    <div className='flex max-sm:py-5 max-sm:px-5 md:pt-12 justify-between max-sm:bg-white'>
                        <div className='flex gap-4'>
                            <img
                                src='assets/burger.svg'
                                alt='burger'
                                srcset=''
                                className='md:hidden'
                            />
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
                            <span class='material-symbols-outlined'>
                                notifications
                            </span>
                            <img
                                src='assets/avatar.png'
                                alt='avatar'
                                className='rounded-full h-fit max-w-fit'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='self-start font-[Figtree] md:hidden text-[#030229] text-2xl font-semibold pl-8 mt-7 mb-6'>
                            Upload CSV
                        </span>
                        <div className='md:mt-12 bg-white md:w-[590px] max-sm:w-11/12 h-full rounded-lg p-4 md:mb-4'>
                            <div className='text-center border border-dashed h-[360px] rounded-lg md:w-full flex items-center justify-center flex-col gap-4'>
                                <img src='assets/excel.svg' alt='excel logo' />
                                {/* <DropdownComponent /> */}
                                {loading != 'loading' && (
                                    <span className='text-[#999CA0] font-normal'>
                                        Drop your excel sheet here or{' '}
                                        <button
                                            className='text-[#605BFF]'
                                            onClick={buttonClickHandler}
                                            disabled={loading == 'disabled'}
                                        >
                                            browse
                                        </button>
                                    </span>
                                )}
                                {loading == 'loading' && (
                                    <div className='flex flex-col justify-center items-center'>
                                        <span className='text-[#999CA0] font-normal mb-4'>
                                            upload-template.xlsx
                                        </span>

                                        <span className='text-[#D33030]'>
                                            Remove
                                        </span>
                                    </div>
                                )}
                            </div>
                            <input
                                style={{ display: 'none' }}
                                ref={inputRef}
                                accept='.csv'
                                type='file'
                                onChange={handleFileChange}
                            />

                            <button
                                disabled={loading == 'disabled'}
                                // className='bg-[#605BFF] rounded-lg py-2 mt-2 flex w-full items-center justify-center line gap-2'
                                className={`bg-[#605BFF] rounded-lg py-2 mt-2 flex w-full items-center justify-center line gap-2 ${
                                    loading == 'disabled' ? 'opacity-40' : ''
                                }`}
                                onClick={buttonClickHandler}
                            >
                                {loading != 'loading' && (
                                    <div className='flex justify-center items-center gap-2'>
                                        <img
                                            src='assets/Icon.svg'
                                            alt='upload icon'
                                        />
                                        <span className='font-[Figtree] text-white text-sm font-semibold'>
                                            Upload
                                        </span>
                                    </div>
                                )}
                                {loading == 'loading' && (
                                    <TailSpin // Type of spinner
                                        height='24'
                                        width='24'
                                        color='white'
                                        ariaLabel='tail-spin-loading'
                                        radius='1'
                                        wrapperStyle={{}}
                                        wrapperClass=''
                                        visible={true}
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    {data.length ? (
                        <div className='flex justify-center'>
                            <div className='w-11/12'>
                                <h1 className='mt-24 font[Figtree] text-2xl font-semibold mb-12'>
                                    Uploads
                                </h1>
                                <div className='bg-[#F2F2F2] font-[Figtree] items-center justify-center mb-24 py-4 rounded-lg'>
                                    <div className='flex px-7 mx-4 mb-4 text-[#231F20] [&_span]:font-semibold text-sm'>
                                        <span className='w-1/12'>SI No.</span>
                                        <span className='w-3/12'>Links</span>
                                        <span className='w-2/12'>Prefix</span>
                                        <span className='w-3/12'>Add Tags</span>
                                        <span className=''>Selected Tags</span>
                                    </div>
                                    {data.map((item) => {
                                        //   console.log(item);
                                        return <Tag props={item} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default App;
