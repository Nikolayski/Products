import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SelectTheme from '../SelectTheme/SelectTheme';
import './CollectionType.css';


const CollectionType = props => {

    const [listOfTheme, SetlistofTheme] = useState([]);
    const [isMounted, SetIsMounted] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/products/collections/${props.match.params.type}`)
            .then(res => res.json())
            .then(data =>  SetlistofTheme(data))
            .catch(error => console.log(error))

    }, [isMounted])

    const themeHandler = e => {
        if(e.target.value != "all"){
            fetch(`http://localhost:5000/products/collections/${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                SetlistofTheme(data);
                props.history.push(`/products/collections/${e.target.value}`)
            })
            .catch(error => console.log(error))   
        }
    }

    return (
        <div className="products-page-wrapper">
            <Link to="/products/add">Add product</Link>
            <SelectTheme change={themeHandler} />
            <section className="products-cards-wrapper">
                {listOfTheme.map(x => (
                    <Card key={x._id} className="product-card" style={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia style={{ height: '200px', objectFit: 'cover' }} image={x.image} title="Contemplative Reptile" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {x.theme}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Info:  {x.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Price: {x.price}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Creator: {x.userEmail}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ display: 'flexx', justifyContent: 'center' }}>
                            <Link to={`/products/${x._id}`} style={{ background: 'lightblue', borderRadius: '10px', padding: '5px', textDecoration: 'none' }}>Details</Link>
                        </CardActions>
                    </Card>
                ))}
            </section>
        </div>
    )
}

export default CollectionType;