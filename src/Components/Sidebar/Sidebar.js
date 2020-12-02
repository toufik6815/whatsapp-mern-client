import React from 'react';
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                    <Avatar src='https://avatars3.githubusercontent.com/u/67531698?s=60&v=4' />
                <div className='sidebar_header_right'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_search_container'>
                    <SearchOutlined />
                <input type="text" placeholder='Search or Start new chat'/>
                </div>
            </div>

            <div className='sidebar_chats'>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
            </div>
        </div>
    );
};

export default Sidebar;