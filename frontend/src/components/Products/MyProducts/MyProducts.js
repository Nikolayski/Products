import React, { useEffect, useState } from 'react';
import './MyProducts.css';
import { Card, Typography, Button, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom';


const MyProducts = props => {
    const [products, SetProducts] = useState([]);
    const [IsDeleted, SetIsDeleted] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/products/myproducts/' + localStorage.getItem("email"))
            .then(res => res.json())
            .then(data => SetProducts(data))
            .catch(error => console.log(error))
    }, [IsDeleted])

    const removeProductHandler = (e, id) => {
        e.preventDefault();
        fetch('http://localhost:5000/products/' + id, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(data => {
                SetIsDeleted(true);
                props.history.push('/myProducts')
            })
            .catch(error => console.log(error))
    }

    return (
        <section className="products-cards-wrapper">
            {products.map(x => (
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
                        <Link to={`/products/edit/${x._id}`} style={{ background: 'lightgreen', borderRadius: '10px', padding: '5px', textDecoration: 'none' }} >Edit</Link>
                        <Button variant="contained" color="secondary" onClick={(e) => removeProductHandler(e, x._id)}>Remove</Button>
                    </CardActions>
                </Card>

            ))}
        </section>
    )
}

export default MyProducts;