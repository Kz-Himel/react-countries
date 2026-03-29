import React, { useState } from 'react';
import './Country.css'

const Country = ({country, countVisitedCountries}) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {

        // if else method
        // if(visited) {
        //     setVisited(false);
        // }
        // else {
        //     setVisited(true)
        // } 

        // Ternary operator method
        // setVisited ? true : false

        // Truthy falsy method
        setVisited(!visited);

        // Call the function from Countries
        countVisitedCountries(country);
        
    }
    return (
        // <div className= {`country ${ visited ? "country-visited" : 'country-not-visited'}`}>
        <div className= {`country ${visited && 'country-visited'}`}>
            <img src= {country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <h4>Sub Name: {country.name.official} </h4>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;