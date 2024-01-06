import React from 'react';
import {Route, Router, Routes} from "react-router-dom";
import News from "../Page/News/News.jsx";
import SidebarDialogs from "../Components/SidebarDialogs/SidebarDialogs.jsx";
import Dialogs from "../Page/Dialogs/Dialogs.jsx";

const Routing = () => {
    return (
        <div className='pt70'>
        <Routes>
            <Route path={'/'} element={<SidebarDialogs/>}/>
            <Route path={'/News'} element={<News/>}/>
            <Route path={'/Chat'} element={<Dialogs/>}/>
        </Routes>
        </div>
    );
};

export default Routing;