import './Country.css'

const Country = ({ country }) => {
    // console.log(country);

    const { name, flags, capital, population, area } = country //destructuring
    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Capital of This Country : {capital}</h3>
            <h4>Total Area of this country: {area}</h4>
            <h4>Population of this country: {population}</h4>
            <h4>This is Each countries Flag</h4>
        </div>
    );
};

export default Country;