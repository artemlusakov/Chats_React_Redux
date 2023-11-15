import React from 'react';
import './News.css'
import News1 from '../../assets/IMG/News1.jpg'
import FormNews from "../../Components/NewsComponents/FormNews.jsx";

const News = () => {
    return (
        <div className='News'>
            <div className='NewsList'>
                <FormNews NewsImg={'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt196a300cca7a2ba1/65317b9948aba321588b2eb1/HS_YouTube_MV_Thumb_SMcCrumb_V8.jpg'} NameNews={'HeartStil в игре'} Description={'lol'}/>
                <FormNews NewsImg={'https://i.ytimg.com/vi/qSWGxhEWfTU/sddefault.jpg'} NameNews={'Два новых режима'} Description={'lol'}/>
                <FormNews NewsImg={'https://3dnews.ru/assets/external/illustrations/2023/11/10/1095759/1.jpg'} NameNews={'Показали первый тизер по второму сезону Аркейн'} Description={'lol'}/>
                <FormNews NameNews={'HeartStil в игре'} Description={'lol'}/>
                <FormNews NameNews={'HeartStil в игре'} Description={'lol'}/>
                <FormNews NameNews={'HeartStil в игре'} Description={'lol'}/>

            </div>
            <div className='NewsListMega'>
                <div className='BigNews'></div>
            </div>
        </div>
    );
};

export default News;