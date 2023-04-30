import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Left = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res=>res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h4>All Categories</h4>
            {
                categories.map(ctg =><p > <Link className='text-decoration-none text-secondary ms-4' key={ctg.id} to={`/category/${ctg.id}`}>{ctg.name}</Link></p>)
            }
        </div>
    );
};

export default Left;