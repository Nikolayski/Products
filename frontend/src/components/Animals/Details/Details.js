import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Details.css';

const Details = (props) => {

    const [animal, SetAnimal] = useState({});
    const [isLoaded, SetIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/animals/' + props.match.params.id)
            .then(res => res.json())
            .then(data => {
                SetAnimal(data)
                SetIsLoaded(true);
            })
            .catch(error => console.log(error))
    }, [])

    const removeHandler = e => {
        e.preventDefault();
        fetch('http://localhost:5000/animals/' + props.match.params.id, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(data =>  props.history.push('/animals'))
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
        <div style={{ maxWidth: '60%', margin: '50px auto', textAlign: 'center' }}>
            <h4>Breed: {animal.breed}</h4>
            <img style={{ width: '100%' }} src={animal.image} />
            <p>Name: {animal.name}</p>
            <Link to={`/animals/edit/${props.match.params.id}`}>Edit</Link>
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default Details;