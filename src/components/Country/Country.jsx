import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country);

    const { name, flags, capital, population, area } = country //destructuring

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'Purple' : 'white'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Capital of This Country : {capital}</h3>
            <h4>Total Area of this country: {area}</h4>
            <h4>Population of this country: {population}</h4>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? ' I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;