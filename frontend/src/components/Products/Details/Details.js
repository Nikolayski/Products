import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import UserContext from '../../../components/Contexts/UserContext';
import * as ProdService from '../../../services/CopmonentService';

const Details = props => {

    const [product, SetProduct] = useState({});
    const [isLoaded, SetIsLoaded] = useState(false);

    useEffect(() => {
        ProdService.GetProduct(props.match.params.id)
            .then(data => {
                SetProduct(data)
                SetIsLoaded(true);
            })
            .catch(error => console.log(error))
    }, [])

  

    if (!isLoaded) {
        return (
            <div style={{ maxWidth: '5%', margin: '40vh auto' }} className="loading-spinner-wrapper">
                <img className="loading-spinner" style={{ width: '100%' }} src="https://icons8.com/preloaders/img/favicons/favicon-194x194.png" />
            </div>
        )
    }
    return (
        <article className="product-details">
            <h4 className="product-details-title">{product.theme.toUpperCase()}</h4>
            <img src={product.image} />
            <p>Model: <i>{product.model}</i></p>
            <p>info: <i>{product.description}</i></p>
            <p>Price: <i>{product.price}$</i></p>
            <p>Owner: <i>{product.userEmail}</i></p>
        </article>
    )
}

export default Details;