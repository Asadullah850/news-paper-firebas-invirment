import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const Right = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='w-100 my-1' variant="outline-success"><FaGoogle className='mx-2'/>Login With Google</Button>
            <Button className='w-100' variant="outline-success"><FaGithub className='mx-2'/>Login With GitHub</Button>
            <div className="m-2">
                <h4>Find Us On</h4>
                <div className="m-2">
                    <p><FaFacebookF className='mx-2'></FaFacebookF>FaceBook</p>
                    <p className='my-2'><FaTwitter className='mx-2'></FaTwitter>Twitter</p>
                    <p><FaInstagram  className='mx-2'></FaInstagram>Instagram</p>
                </div>
                <div className="">
                    <h3>Q-Zone</h3>
                    <img src="https://i.ibb.co/0sSkLGC/qZone3.png" alt="" srcset="" />
                    <img className='my-2' src="https://i.ibb.co/svqFMZv/qZone2.png" alt="" srcset="" />
                    <img src="https://i.ibb.co/JcNMFyn/qZone1.png" alt="" srcset="" />
                </div>
                <div className="">
                    <p>Create an Amazing Newspaper
Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
Learn More</p>
                </div>
            </div>
        </div>
    );
};

export default Right;