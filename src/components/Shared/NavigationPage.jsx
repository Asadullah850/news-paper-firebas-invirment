import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HiUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const NavigationPage = () => {
    const { user, userOut } = useContext(AuthContext);

    const handelLogOut = () => {
        userOut()
        then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

        <div className="">
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='align-items-center'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">
                                    <Link to='/'>Home</Link>
                                </Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav className='align-items-center'>

                                {
                                    user ?
                                        <>
                                            {
                                                user.photoURL ?
                                                    <div>
                                                        <img src={user.photoURL} alt="" srcset="" />
                                                    </div>
                                                    :
                                                    <div>
                                                        <HiUserCircle className=""></HiUserCircle>
                                                    </div>
                                            }
                                            <Nav.Link href="#deets">{user.email}</Nav.Link>
                                            <Nav.Link href="#deets">
                                                <Link className='text-white' to='login'>
                                                    <Button onClick={handelLogOut} variant='secondary'>LogOut</Button>
                                                </Link>
                                            </Nav.Link>
                                        </>
                                        :
                                        <>
                                            <Nav.Link href="#deets">
                                                <Link className='text-white' to='/login'>
                                                    <Button variant='secondary'>Login</Button>
                                                </Link>
                                                <Link className='text-white mx-2' to='/register'>
                                                    <Button variant='secondary'>Register</Button>
                                                </Link>
                                            </Nav.Link>
                                        </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationPage;