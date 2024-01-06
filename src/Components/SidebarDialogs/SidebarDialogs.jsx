import React from 'react';
import './SidebarDialogs.css'
import SidebarDialogsChats from "../SidebarDealogsChats/SidebarDialogsChats.jsx";

const SidebarDialogs = () => {
    return (
        <div className='SidebarDialogs'>
            <SidebarDialogsChats AvaChats={''} NameChats={'Lol'} LastMasege={'lol'}/>
        </div>
    );
};

export default SidebarDialogs;