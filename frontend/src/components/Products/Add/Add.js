import { Button, FormControl, Input, InputLabel, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
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
                <select name="theme" id="theme" className="add-product-theme">
                    <option value="">Choose your theme:</option>
                    <option value="tv">TV</option>
                    <option value="games">Games</option>
                    <option value="electronics">Electronics</option>
                    <option value="pc">PC</option>
                    <option value="home">Home</option>
                    <option value="clothes">Clothes</option>
                    <option value="accessories">Accessories</option>
                    <option value="industrial">Industrial</option>
                    <option value="health">Health</option>
                    <option value="sports">Sports</option>
                    <option value="children">Children</option>
                    <option value="toys">Toys</option>
                </select>
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