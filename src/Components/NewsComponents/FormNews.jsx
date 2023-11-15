import React from 'react';
import News1 from "../../assets/IMG/News1.jpg";
import './FormNews.css'

const FormNews = (props) => {
    return (

            <div className='NewsListBox'>
                <div className='NewsListContent'>
                    <h1>{props.NameNews}</h1>
                    <p>{props.Description}</p>
                </div>
                <img src={props.NewsImg} alt=""/>
            </div>

    );
};

export default FormNews;