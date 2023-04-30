import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('');
    const { userSingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    let from = location.state?.from?.pathname || '/category/0';

    const handelLogin = (event) => {

        event.preventDefault();
        const get = event.target;
        const email = get.email.value;
        const password = get.password.value;
        setError('')
        if (password.length < 8) {
            setError('Password smaller then 8')
            return
        }

        userSingIn(email, password)
            .then(res => {
                const getUser = res.user;
                navigate(from, { replace: true })
                console.log(getUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });


    }
    return (
        <div>
            <Container>
                <h2 className='text-center'>Login</h2>
                <Form onSubmit={handelLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" name='password' />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        <p className='text-danger my-2'>{error}</p>
                    </Form.Text>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;