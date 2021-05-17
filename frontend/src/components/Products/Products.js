import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { Card, Select, MenuItem, InputLabel, Typography, Button, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'
import SelectTheme from './SelectTheme/SelectTheme';


const Products = props => {

    const [products, SetProducts] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(false);


    useEffect(() => {
        let mounted = true;
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                if (mounted) {
                    SetProducts(data)
                    SetIsLoaded(true);
                }

            })
            .catch(error => console.log(error))

        return () => {
            mounted = false
        }
    }, [])



    if (!isLoaded) {
        return (
            <div style={{ maxWidth: '5%', margin: '40vh auto' }} className="loading-spinner-wrapper">
                <img className="loading-spinner" style={{ width: '100%' }} src="https://icons8.com/preloaders/img/favicons/favicon-194x194.png" />
            </div>
        )
    }

    return (
        <div className="products-page-wrapper">
            <div className="products-buttons">
                <Link className="products-buttons-link" to="/products/add">Add product</Link>
                <SelectTheme change={(e) => props.history.push(`/products/collections/${e.target.value}`)} />
            </div>
            <section className="products-cards-wrapper">
                {products.map(x => (
                    <Card key={x._id} className="product-card" style={{ maxWidth: '100%' }}>
                        <CardActionArea onClick={e => props.history.push(`/products/${x._id}`)}>
                            <CardMedia  style={{ height: '300px', objectFit: 'cover' }} image={x.image} title="Contemplative Reptile" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {x.theme}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Info:  {x.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Price: {x.price}$
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Owner: {x.userEmail}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to={`/products/${x._id}`} style={{ background: 'lightblue', borderRadius: '10px', padding: '5px', textDecoration: 'none' }}>Details</Link>
                        </CardActions>
                    </Card>
                ))}
            </section>
        </div>
    )
}

export default Products;




