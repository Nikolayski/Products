import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import './Edit.css';

const Edit = props => {

    const [animal,SetAnimal] = useState({});

        useEffect(() => {
            fetch('http://localhost:5000/animals/' + props.match.params.id)
                .then(res => res.json())
                .then(data => {
                    SetAnimal(data)
                })
                .catch(error => console.log(error))
        }, [])


        const addAnimalHandler = (e) => {
            e.preventDefault();
            fetch('http://localhost:5000/animals',{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: props.match.params.id,
                    breed: e.target.breed.value,
                    name: e.target.name.value,
                    image: e.target.image.value
                })
            })
                .then(res => res.text())
                .then(data => props.history.push('/animals'))
                .catch(error => console.log(error))
        }
    

    return (
        <form onSubmit={addAnimalHandler}>
            <label htmlFor="breed">
                Breed
                <input type="text" name="breed" id="breed" defaultValue={animal.breed} />
            </label>
            <label htmlFor="name">
                Name
                <input type="text" name="name" id="name" defaultValue={animal.name}  />
            </label>
            <label htmlFor="image">
                Image
                <input type="text" name="image" id="image" defaultValue={animal.image}  />
            </label>
            <input type="submit" value="Edit" />
        </form>
    )
}

export default Edit;