import React from 'react';
import './SidebarDealogsChats.css'

const SidebarDialogsChats = (props) => {
    return (
        <div className='SidebarDialogsChats'>
            <img src={props.AvaChats} alt=""/>
            <div className='SidebarDialogsChatsContent'>
                <h1>{props.NameChats}</h1>
                <p>{props.LastMasege}</p>
            </div>
        </div>
    );
};

export default SidebarDialogsChats;