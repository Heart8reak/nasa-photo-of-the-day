import React from 'react';
import {
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const CardSample = props => {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        // <div>
        <Row>
            <Col sm="auto" md={{ size: 6, offset: 3 }}>
                <CardImg top width="100%" src={props.url} alt="Card image cap" />
                <CardBody>
                    <Button onClick={refreshPage}>Click for New Image</Button>
                    <br />
                    <br />
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                    <CardText>{props.explanation}</CardText>

                </CardBody>
            </Col>
        </Row>
        // </div>
    )
};


export default CardSample;