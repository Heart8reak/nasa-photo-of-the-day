import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardSample from "./card";


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


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CardSample from "./card";

// export default function CardDisplay({ limit }) {
//     const [cardInfo, setCardInfo] = useState({});
//     // function randomNum(min, max) {
//     //     return Math.floor(Math.random() * (max - min + 1) + min);
//     // }
//     // const randomDate = `${randomNum(2000, 2018)}-${randomNum(1, 12)}-${randomNum(
//     //     1,
//     //     28
//     // )}`;
//     // console.log(randomNum(2001, 2018));

//     useEffect(() => {
//         axios
//             .get(
//                 `https://api.nasa.gov/planetary/apod?api_key=IzBKQgfjnrney9vMJF3iXVqtCDxTWh4mNhwiLeJr`
//             )
//             .then(response => {
//                 console.log(response.data);
//                 setCardInfo(response.data);
//             });
//     }, []);
//     return (
//         <div className="containter">
//             <CardSample
//                 key={cardInfo.url}
//                 title={cardInfo.title}
//                 date={cardInfo.date}
//                 url={cardInfo.url}
//                 explanation={cardInfo.explanation}
//             />
//         </div>
//     );
// }