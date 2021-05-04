import { Button, FormControl, Input, InputLabel, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
import SelectTheme from '../SelectTheme/SelectTheme';
import './Add.css';

const Add = props => {

    const addProductHandler = event => {
        event.preventDefault();
        const [theme, model, image,  price, description] = event.target;
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                theme: theme.value,
                model: model.value,
                image: image.value,
                description: description.value,
                price: price.value,
                userEmail: localStorage.getItem('email')
            })
        })
            .then(res => res.text())
            .then(data => props.history.push('/products'))
            .catch(error => console.log(error))
    }

    return (
        <section className="add-product-wrapper">
            <form onSubmit={addProductHandler} className="add-product-form">
                <SelectTheme />
                <FormControl className="form-control">
                    <InputLabel htmlFor="model">Model</InputLabel>
                    <Input type="text" id="model" name="model" />
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel htmlFor="image">Image Url</InputLabel>
                    <Input type="text" id="image" name="image" />
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <Input type="number" id="price" name="price" />
                </FormControl>
                <FormControl className="form-control">
                    <TextareaAutosize className="add-product-description" rowsMin="10" cols="35" type="text" id="description" name="description" placeholder="Description" />
                </FormControl>

                <Button variant="contained" color="primary" type="submit">Add</Button>
            </form>
        </section>
    )
}

export default Add;