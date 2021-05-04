import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import UserContext from '../../../components/Contexts/UserContext';

const Details = props => {

    const [product, SetProduct] = useState({});
    const [isLoaded, SetIsLoaded] = useState(false);
    const { email, SetEmail } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/products/' + props.match.params.id)
            .then(res => res.json())
            .then(data => {
                SetProduct(data)
                SetIsLoaded(true);
            })
            .catch(error => console.log(error))
    }, [])

    const removeProductHandler = (e) => {
        fetch('http://localhost:5000/products/' + props.match.params.id, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(data => props.history.push('/products'))
            .catch(error => console.log(error))
    }

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
            <img  src={product.image} />
            <p product-details-model>Model: <i>{product.model}</i></p>
            <p product-details-description>info: <i>{product.description}</i></p>
            <p product-details-price>Price: <i>{product.price}$</i></p>
        </article>
    )
}

export default Details;