import React from 'react';
import Header from './Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';
import Left from './Shared/Left';
import Right from './Shared/Right';
import { Col, Container, Row } from 'react-bootstrap';

const NewsLayout = () => {
    return (
        <div>
        <Header></Header>
        <Container>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                <Right></Right>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default NewsLayout;