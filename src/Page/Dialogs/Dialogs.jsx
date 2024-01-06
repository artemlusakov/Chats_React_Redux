import React from 'react';
import SidebarDialogs from "../../Components/SidebarDialogs/SidebarDialogs.jsx";
import './Dialogs.css'

const Dialogs = () => {
    return (
        <div className='Dialogs'>
            <SidebarDialogs/>
            <div className='DialogsContent'>

            </div>
        </div>
    );
};

export default Dialogs;