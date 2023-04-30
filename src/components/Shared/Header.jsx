import moment from 'moment/moment';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationPage from './NavigationPage';
const Header = () => {
    
    return (
        <div>
            <Container>
                <div className=" text-center my-2">
                    <img className='' src="https://i.ibb.co/dPZN6Z3/n-logo.png" alt="" srcset="" />
                    <p>Journalism Without Fear or Favour</p>
                    <h6>{moment().format('dddd, MMMM D, YYYY')}</h6>
                </div>
                <div className="d-flex my-auto">
                    <Button variant="danger" className='w-25'>Hot News</Button>
                    <Marquee pauseOnHover={true} speed={50} className='text-danger'>
                        I can be a React component, multiple React components, or just some text......  I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
                <NavigationPage></NavigationPage>
            </Container>
        </div>
    );
};

export default Header;