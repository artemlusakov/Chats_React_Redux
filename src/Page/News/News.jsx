import React from 'react';
import './News.css'

const News = () => {
    return (
        <div className='News'>
            <div className='NewsList1'>
                <div className='NewsList1Box'></div>
                <div className='NewsList1Box'></div>
                <div className='NewsList1Box'></div>
            </div>
            <div className='NewsList2'>
                <div className='NewsList2Box'></div>
                <div className='NewsList2Box'></div>
                <div className='NewsList2Box'></div>
            </div>
            <div className='NewsList3'>
                <div className='BigNews'></div>
            </div>
        </div>
    );
};

export default News;