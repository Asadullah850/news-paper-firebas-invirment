import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';

const Rregistration = () => {

    const [error, setError] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const { userCreate } = useContext(AuthContext)


    const handelChackbpx = () => {
        setCheckbox(!checkbox)
    }

    const handelRegister = (event) => {

        event.preventDefault();
        const get = event.target;
        const name = get.name.value;
        const email = get.email.value;
        const password = get.password.value;
        const conPassword = get.conPassword.value;
        console.log(name, email, password, conPassword);
        setError('')
        if (password.length < 8) {
            setError('Password smaller then 8')
            return
        } else if (password !== conPassword) {
            setError('Password not equal')
            return
        }

        userCreate(email, password)
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
    return (
        <div>
            <h1 className='text-center'>Register</h1>
            <Container>
                <Form onSubmit={handelRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" name='name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" name='password' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm-Password" name='conPassword' />
                    </Form.Group>
                    <Form.Text className="text-muted text-danger">
                        {error}
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handelChackbpx} type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className={checkbox ? ' ' : 'disabled'}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Rregistration;