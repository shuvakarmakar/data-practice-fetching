import './Country.css'

const Country = ({country}) => {
    // console.log(country);

    const {name, flags} = country //destructuring
    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>This is Each countries Flag</h4>
        </div>
    );
};

export default Country;