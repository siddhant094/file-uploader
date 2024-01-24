import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Menu from './components/Menu';
import './App.css';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div>
            <div className='flex bg-neutral-50'>
                <Menu />
                <div>
                    <div className='flex pt-12 justify-evenly'>
                        <span className='font-[Figtree] text-2xl font-semibold text-shadow pl-8'>
                            Upload CSV
                        </span>
                        <div className='flex items-center'>
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
                    <div className='flex justify-center items-center'>
                        <div className='mt-36 bg-white w-[590px] h-[360px] rounded-lg p-3'>
                            <div className='border border-dashed w-full h-full'>
                                Hello
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
