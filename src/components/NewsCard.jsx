import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaBookmark, FaShareAlt, FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
    const { _id, others_info, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = singleNews;
    // console.log(_id);
    return (
        <div className='p-2'>
            <Card className="px-2">
                <Card.Header className='d-flex justify-content-between'>
                    <div className="d-flex">
                        <div className="">
                            <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                        </div>
                        <div className="ms-2">
                            <p>{author ? author.name : 'Unkonown'}</p>
                            <p>{moment(author.published_date).format('MMMM  D, YYYY')}</p>
                        </div>
                    </div>
                    <div className="">
                        <FaBookmark className='' role="button"></FaBookmark>
                        <FaShareAlt className='mx-2 ' role="button"></FaShareAlt>
                    </div>
                </Card.Header>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="">
                        <Image className='' fluid src={image_url} rounded />
                    </div>
                    <Card.Text>
                        {details.slice(0, 150)}..... <Link to={`/news/${_id}`}>Read More</Link>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Rating className=''
                            readonly
                            placeholderRating={rating.number}
                            emptySymbol={<FaStarHalfAlt className='text-Warning'></FaStarHalfAlt>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar className='text-Warning'></FaStar>}
                        />
                        <p className='mx-2'>{rating.number}</p>
                    </div>
                    <div className=""><FaEye className='mx-1'></FaEye>{total_view}</div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;