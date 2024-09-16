const Country = ({country}) => {
    console.log(country);

    const {name} = country //destructuring
    return (
        <div>
            <h3>Name: {name.common}</h3>
        </div>
    );
};

export default Country;