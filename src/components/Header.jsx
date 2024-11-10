import React, { useState, useRef } from 'react';
import logo from '../../public/Images/logo.png';
import avatar from '../../public/Images/avatar2.jpg';
import { HiHome, HiSearch, HiStar, HiPlus, HiDotsVertical } from 'react-icons/hi';
import { HiPlayCircle, HiTv } from 'react-icons/hi2';
import HeaderItem from './HeaderItem';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearch, setShowSearch] = useState(false); // State for showing search input
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const dropdownRef = useRef(null);

    const menu = [
        { name: 'Home', icon: HiHome },
        { name: 'Search', icon: HiSearch },
        { name: 'Watchlist', icon: HiStar },
        { name: 'Movies', icon: HiPlayCircle },
        { name: 'Series', icon: HiTv },
        { name: 'Plus', icon: HiPlus },
    ];

    const handleSearchToggle = () => {
        setShowSearch(!showSearch); // Toggle search bar visibility
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update the search query
    };

    return (
        <div className='flex items-center justify-between p-4 sm:p-6 text-white'>
            {/* Logo */}
            <div className='flex items-center gap-4 sm:gap-6'>
                <img src={logo} alt="Logo" className='w-[80px] sm:w-[120px] md:w-[150px] object-cover' />
                
                {/* Menu Items for Desktop */}
                <div className='hidden md:flex gap-5'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} hideOnMobile />
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden flex gap-4 items-center'>
                    {menu.slice(0, 3).map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} hideOnMobile />
                    ))}
                    <div
                        className='relative'
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                        ref={dropdownRef}
                    >
                        <HeaderItem name='' Icon={HiDotsVertical} />
                        {showDropdown && (
                            <div className='absolute right-0 mt-2 w-40 bg-slate-50 rounded-md shadow-lg border border-slate-500 text-blue-600 z-10 p-2'>
                                {menu.slice(3).map((item) => (
                                    <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Search Icon */}
            <div className='relative'>
                <HiSearch
                    onClick={handleSearchToggle} 
                    className='text-2xl cursor-pointer' 
                />
                {showSearch && (
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="absolute top-0 left-0 mt-10 p-2 rounded-lg bg-slate-800 text-white w-64 focus:outline-none"
                    />
                )}
            </div>

            {/* Responsive Avatar */}
            <img 
                src={avatar} 
                alt="User Avatar" 
                className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-700' 
            />
        </div>
    );
}

export default Header;
