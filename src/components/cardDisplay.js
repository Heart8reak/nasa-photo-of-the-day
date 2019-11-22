import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardSample from "./card";
// import styled from "styled-components";
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from "reactstrap";


export default function CardDisplay({ limit }) {

    const [cardInfo, setCardInfo] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=q2w0EUcjWCGZOiZGsNUqxpJoHagCyOQC1YG8SjFY`)
            .then(res => {
                console.log(res.data);
                setCardInfo(res.data);
            });
    }, []);

    return (
        <div className="container">
            <CardSample
                key={cardInfo.url}
                title={cardInfo.title}
                date={cardInfo.date}
                url={cardInfo.url}
                explanation={cardInfo.explanation}
            />
        </div>
    );
}
