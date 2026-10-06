import Image from 'next/image';
import React from 'react';
import Navelinkcatagoris from './Navelinkcatagoris';
import Userinfo from './Userinfo';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <header className='w-full border-b border-gray-200 rounded-b-xl bg-white'>
            <div className='grid grid-cols-3 items-center max-w-7xl mx-auto px-4 py-3'>
                <div />
                <div className='flex items-center justify-center gap-2'>
                    <Image
                        className='w-10 h-10 rounded-lg'
                        height={40}
                        width={40}
                        src='/logo.webp'
                        alt='Logo'
                    />
                    <div>
                        <div className='font-serif text-2xl font-bold text-red-700 leading-tight'>
                            Bangla News 7.0
                        </div>
                        <div className='text-xs text-gray-500'>{date}</div>
                    </div>
                </div>

                <Userinfo />
            </div>
            <Navelinkcatagoris />
        </header>
    );
};

export default Header;