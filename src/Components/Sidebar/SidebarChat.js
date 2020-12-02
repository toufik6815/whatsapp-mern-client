import { Avatar } from '@material-ui/core';
import React from 'react';

const SidebarChat = () => {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat__info'>
                <h2>Room Name</h2>
                <p>This is The last massage</p>
            </div>
        </div>
    );
};

export default SidebarChat;