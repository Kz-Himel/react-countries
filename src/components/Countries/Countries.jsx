import { use, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({fetchCountries}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const countVisitedCountries = (country) => {
    const exists = visitedCountries.find(c => c.cca3 === country.cca3);

    if (exists) {
        // remove
        const remaining = visitedCountries.filter(c => c.cca3 !== country.cca3);
        setVisitedCountries(remaining);
    } else {
        // add
        setVisitedCountries([...visitedCountries, country]);
    }
}

    const countriesData = use(fetchCountries);
    const countries = countriesData.countries;
    return (

        <>
        <h1>There are {countries.length} Countries </h1>
        <h2>Total Country Visited: {visitedCountries.length} </h2>
        <ol>
            {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
        </ol>
          <div className='countries'>
            {
                countries.map(country => <Country country = {country} countVisitedCountries = {countVisitedCountries} />)
            }
        </div>
        </>
    );
};

export default Countries;