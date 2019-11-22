import React from 'react';
import {
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const CardSample = props => {
    return (
        // <div>
        <Row>
            <Col sm="4" md={{ size: 6, offset: 3 }}>
                <CardImg top width="100%" src={props.url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                    <CardText>{props.explanation}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Col>
        </Row>
        // </div>
    )
};


export default CardSample;