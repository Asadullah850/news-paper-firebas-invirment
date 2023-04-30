import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoriesNews = useLoaderData()
    console.log(categoriesNews);
    return (
        <div>
            {id && <p>This is Category {categoriesNews.length}</p>}
            {
                categoriesNews.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default Category;