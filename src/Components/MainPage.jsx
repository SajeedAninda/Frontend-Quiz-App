import React, { useState } from 'react';
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";

const MainPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='min-h-screen bg-[#f4f6fa] py-16'>
            <nav className="Navbar w-[80%] mx-auto flex justify-between">
                <div className=""></div>
                <div className='flex items-center gap-4'>
                    <LuSun className='text-gray-500 w-[24px] h-[24px]' />
                    <button
                        onClick={handleToggle}
                        className='themeSwitcher w-[48px] h-[30px] rounded-2xl bg-[#979797] dark:bg-[#A729f5] flex items-center px-[0.15rem] cursor-pointer hover:bg-[#A729f5] transition-colors delay-50'
                    >
                        <div
                            className={`w-[20px] h-[20px] bg-[#f4f4f4] rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-[1.2rem]' : 'translate-x-0'}`}
                        ></div>
                    </button>
                    <GoMoon className='text-gray-500 w-[24px] h-[24px]' />
                </div>
            </nav>
        </div>
    );
};

export default MainPage;