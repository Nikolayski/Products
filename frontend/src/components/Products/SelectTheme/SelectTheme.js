import React from 'react';
import './SelectTheme.css';

const SelectTheme = props => {

    return (
        <select onChange={props.change} name="theme" className="add-product-theme">
            <option value="all">Choose your theme:</option>
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
    )

}

export default SelectTheme;