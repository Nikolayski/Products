import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { Link } from 'react-router-dom';
import * as prodServices from '../../services/CopmonentService';

const Home = (props) => {

    const [homeCollection, SetHomeCollection] = useState([]);
    const [IsLoading, SetIsLoading] = useState(false);

    useEffect(() => {
         prodServices.getAll()
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
                <p> Fast, Easy, Secure</p>
            </article>
            <Carousel className="home-carousel">
                {homeCollection.map(x => (
                    <div key={x._id}>
                        <p>{x.theme.toUpperCase()}</p>
                        <img style={{ width: '100%', borderRadius: '15px' }} src={x.image} />
                        <Link className="home-carousel-link" to={`products/${x._id}`}>Details</Link>
                    </div>
                ))}
            </Carousel>
            <article className="home-info">
                <h2>Solution for every person</h2>
                <article className="home-info-parts">
                    <article className="home-info-part">
                        <img src="https://iasbh.tmgrup.com.tr/88bb76/1200/627/0/0/1408/736?u=https://isbh.tmgrup.com.tr/sbh/2021/02/24/imge-nedir-imge-ornekleri-ile-konu-anlatimi-1614170235319.jpg" />
                        <h4>Exceptional Online Stores</h4>
                        <p>
                        Sell more and promote your brand with state-of-the-art storefronts, custom cart and checkout, and an industry-leading suite of professional eCommerce apps.
                        </p>
                    </article>
                    <article className="home-info-part">
                        <img src="https://thumbs.dreamstime.com/b/imge-mint-image-green-leaves-79631310.jpg" />
                        <h4>Comprehensive eCommerce Platform</h4>
                        <p>
                        Sell on multiple sales channels, like Facebook or eBay, and manage your store from one integrated dashboard—from store orders to payment, shipping, fulfillment, marketing and more.
                        </p>
                    </article>
                    <article className="home-info-part">
                        <img src="https://c8.alamy.com/comp/P1HJ9F/ripe-cherries-on-the-treeimge-of-a-P1HJ9F.jpg" />
                        <h4>Advanced Payment Options</h4>
                        <p>
                        Offer customers secure checkout and handle business transactions seamlessly. Get competitive payment processing rates, custom payout schedules and dozens of payment providers.
                        </p>
                    </article>
                </article>
            </article>

        </section>
    )
}

export default Home;

