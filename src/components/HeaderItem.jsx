import React from 'react';

function HeaderItem({ name, Icon, hideOnMobile }) {
  return (
    <div className='text-blue-500 flex items-center gap-3 text-[18px] font-sans font-semibold cursor-pointer hover:underline underline-offset-8'>
        <Icon />
        <h2 className={`${hideOnMobile ? 'hidden md:block' : ''}`}>{name}</h2>
    </div>
  );
}

export default HeaderItem;
