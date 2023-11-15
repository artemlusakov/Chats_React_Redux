import React from 'react';
import {Route, Router, Routes} from "react-router-dom";
import News from "../Page/News/News.jsx";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";

const Routing = () => {
    return (
        <div className='pt70'>
        <Routes>
            <Route path={'/'} element={<Sidebar/>}/>
            <Route path={'/News'} element={<News/>}/>
        </Routes>
        </div>
    );
};

export default Routing;