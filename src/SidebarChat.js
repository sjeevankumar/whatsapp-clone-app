import React, { useEffect } from 'react';
import { Avatar } from '@material-ui/core';

import './SidebarChat.css';
import { useState } from 'react';

function SidebarChat({addNewChat}) {

      const [seed,setSeed]=useState('');

      useEffect(()=>{
            setSeed(Math.floor(Math.random()*5000))
      },[]);

      const createChat=()=>{
            const roomName=prompt('Please enter name for chat');

            if(roomName){
                  // do some clever database stuff...
            }
      }

      return !addNewChat ? (
            <div className='sidebarChat'>
                  <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                  <div className="sidebarChat_info">
                        <h2>Room name</h2>
                        <p>Last message...</p>
                  </div>
            </div>
      ):(
            <div className="sidebarChat" onClick={createChat}>
                  <h2>Add new Chat</h2>
            </div>
      )
}

export default SidebarChat
