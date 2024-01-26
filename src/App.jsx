import { useState } from 'react';
import { useRef } from 'react';

import Papa from 'papaparse';
import Menu from './components/Menu';
// import DropdownComponent from './components/DropdownComponent';
import Navbar from './components/Navbar';
import Tag from './components/Tag';
import { TailSpin } from 'react-loader-spinner';

// import { CSSTransition } from 'react-transition-group';

import './App.css';
import Uploads from './components/Uploads';

function App() {
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
                setTimeout(() => {
                    setLoading('disabled');
                }, 3000);
                // console.log(results);
            },
        });
        // setLoading('disabled');
    };

    return (
        <div className='bg-neutral-50 min-h-screen'>
            <div className='flex bg-neutral-50 max-sm:bg-[#FAFAFB]'>
                <Menu class='w-2/12 max-sm:hidden' />
                <div className='w-full'>
                    <Navbar />

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
                    {data.length && loading != 'loading' ? (
                        <Uploads props={data} />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default App;
