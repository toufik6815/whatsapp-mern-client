import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';
import axios from './Components/axios/axios'


function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data)
    })
  }, [])


  useEffect(() => {
    const pusher = new Pusher('7e2052d139fa7d66a8d9', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });


    return () => {
      channel.unbind_all( );
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages);

  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar></Sidebar> 
        <Chat messages={messages}></Chat>
      </div>
    </div>
  );
}

export default App;
