import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React from 'react';
import './Home.css';


const Home = (props) => {


  
    return (
        <form>
            <p>Get weather info</p>
            <FormControl className="form-control">
                <InputLabel htmlFor="town">Town</InputLabel>
                <Input type="text" id="town" name="town" />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Search</Button>
        </form>
    )
}

export default Home;


