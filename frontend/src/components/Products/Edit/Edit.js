import { Button, FormControl, Input, InputLabel, TextareaAutosize, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Edit.css';
import * as ProdService from '../../../services/CopmonentService';

const Edit = props => {

    const [product, SetProduct] = useState({});

    useEffect(() => {
        ProdService.GetProduct(props.match.params.id)
            .then(data => SetProduct(data))
            .catch(error => console.log(error))
    }, [])

    const editProductHandler = e => {
        e.preventDefault();
        const [model, image, description, price] = e.target;
        var productToEdit = {
            id: props.match.params.id,
            model: e.target.model.value,
            image: e.target.image.value,
            description: e.target.description.value,
            price: e.target.price.value
        }

        ProdService.EditProduct(productToEdit)
            .then(data => props.history.push('/myProducts'))
            .catch(error => console.log(error))
    }
    return (
        <section className="add-product-wrapper">
            <form onSubmit={editProductHandler} className="add-product-form" >
                <label htmlFor="model">
                    Model
               <input type="text" name="model" id="model" defaultValue={product.model} />
                </label>
                <label htmlFor="image">
                    Image
               <input type="text" name="image" id="image" defaultValue={product.image} />
                </label>
                <label htmlFor="description">
                    <textarea id="description" name="description" placeholder="Description" defaultValue={product.description} rows="10" cols="30"></textarea>
                </label>
                <label htmlFor="price">
                    Price
               <input type="number" name="price" id="price" defaultValue={product.price} />
                </label>
                <input type="submit" value="Edit" />
                {/* <FormControl className="form-control">
                    <TextField type="text" id="model" name="model" value={product.model} />
                </FormControl>
                <FormControl className="form-control">
                    <TextField type="text" id="image" name="image" value={product.image} />
                </FormControl>
                <FormControl className="form-control">
                    <TextField type="number" id="price" name="price" value={product.price} />
                </FormControl>
                <FormControl className="form-control">
                    <TextareaAutosize className="add-product-description" rowsMin="10" cols="35" type="text" id="description" name="description" placeholder="Description" defaultValue={product.description} />
                </FormControl>

                <Button variant="contained" color="primary" type="submit">Add</Button> */}
            </form>
        </section>
    )

}

export default Edit;