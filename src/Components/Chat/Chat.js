import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react';
import './Chat.css';
import axios from '../axios/axios'

const Chat = ({messages}) => {
    const [input, setInput] = useState(' ')

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: "DEMO APP",
            timestamp: "Far far away in the galaxy....",
            received: false
        });
        setInput("")
    }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />

                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                    <p>Lats seen at ....</p>
                </div>

                <div className='chat_header_right'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                {
                    messages.map((message )=> (
                        <p className={`chat__massage${message.received && "chat__reciever"}`}>
                        <span className='chat__name'>{message.name}</span>
                            {message.message}
                        <span className='chat__timestamp'>
                            {message.timestamp}
                        </span>
                    </p>
                    ))
                }
{/*                
                <p className='chat__massage chat__reciever'>

                    <span className='chat__name'>sunny</span>
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p> */}
            </div>


            {/*======================================================= Chat Footer */}
            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;