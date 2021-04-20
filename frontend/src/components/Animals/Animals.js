import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Animals.css';

const Animals = (props) => {

    const [animals, SetAnimals] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(false);

    useEffect(() => {
        let mounted = true;
        fetch('http://localhost:5000/animals')
            .then(res => res.json())
            .then(data => {
                if (mounted) {
                    SetAnimals(data)
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
        <section>
            <Link to="/animals/add">Add animal</Link>
            <div style={{ maxWidth: '80%', margin: '50px auto', display: 'flex', justifyContent: 'flex-start' }}>
                {animals.map(x => (
                    <div style={{ width: '30%', border: '1px solid', textAlign: 'center', marginRight: '20px' }} key={x._id}>
                        <p>Breed: {x.breed}</p>
                        <img style={{ width: '100%' }} src={x.image} />
                        <p>Name: {x.name}</p>
                        <Link to={`/animals/${x._id}`}>Details</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Animals;