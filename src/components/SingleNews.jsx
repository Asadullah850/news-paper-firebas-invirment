import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const SingleNews = () => {
    const news = useLoaderData();
    const { _id, others_info, category_id, title, image_url, details } = news;
    console.log(news);
    return (
        <div>
            <h3 className="">Dragon News</h3>
            <Card >
                <Card.Img   variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger">Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleNews;