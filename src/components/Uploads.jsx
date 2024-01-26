import React from 'react';
import Tag from './Tag';

const Uploads = ({ props }) => {
    // console.log(props);
    let data = props;
    return (
        <div className='flex justify-center'>
            <div className='w-11/12'>
                <h1 className='mt-24 font[Figtree] text-2xl font-semibold mb-12'>
                    Uploads
                </h1>
                <div className='bg-[#F2F2F2] font-[Figtree] items-center justify-center mb-24 py-4 rounded-lg md:px-5 max-sm:overflow-x-scroll'>
                    <div className='grid grid-flow-col gap-4 px-7 mx-4 mb-4 max-sm:pl-0 max-sm:ml-0 text-[#231F20] [&_span]:font-semibold text-sm max-sm:w-[660px]'>
                        <span className='max-sm:w-14 max-sm:absolute max-sm:bg-[#F2F2F2] max-sm:h-16 max-sm:pl-2 max-sm:z-10'>
                            SI No.
                        </span>
                        <div className='grid grid-flow-col grid-cols-4 gap-2 max-sm:w-[660px] max-sm:px-7 max-sm:ml-16'>
                            <span className='max-sm:w-36'>Links</span>
                            <span className=''>Prefix</span>
                            <span className=''>Add Tags</span>
                            <span className='md:w-52'>Selected Tags</span>
                        </div>
                    </div>
                    {data.map((item) => {
                        //   console.log(item);
                        return <Tag props={item} key={item.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Uploads;
