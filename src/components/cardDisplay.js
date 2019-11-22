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

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomDate = `${randomNum(2000, 2018)}-${randomNum(1, 12)}-${randomNum(
        1,
        28
    )}`;
    console.log(randomNum(2001, 2018));

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=q2w0EUcjWCGZOiZGsNUqxpJoHagCyOQC1YG8SjFY&date=${randomDate}`)
            .then(res => {
                console.log(res.data);
                setCardInfo(res.data);
            })
            .catch(error => {
                console.log("The planet was not returned", error);
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
