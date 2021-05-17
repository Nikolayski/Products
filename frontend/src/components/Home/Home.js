import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = (props) => {

    const [homeCollection, SetHomeCollection] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                SetHomeCollection(data)
                SetIsLoading(true);
            })
            .catch(error => console.log(error));

    }, [])


    if (!IsLoading) {
        return (
            <div style={{ maxWidth: '5%', margin: '40vh auto' }} className="loading-spinner-wrapper">
                <img className="loading-spinner" style={{ width: '100%' }} src="https://icons8.com/preloaders/img/favicons/favicon-194x194.png" />
            </div>
        )
    }
    return (
        <section className="home-wrapper">
            <h1>WELCOME</h1>
            <article className="home-content">
                <h2>Start Selling Online</h2>
                <p>
                    Fast, Easy, Secure
                </p>

            </article>
            <Carousel className="home-carousel">
                {homeCollection.map(x => (
                    <div key={x._id}>
                        <p>{x.theme.toUpperCase()}</p>
                        <img style={{ width: '100%' }} src={x.image} />
                        <Link className="home-carousel-link" to={`products/${x._id}`}>Details</Link>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default Home;

