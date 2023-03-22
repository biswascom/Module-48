import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, region, area, capital, flags, languages} = props.country;
    return (
        <div className='country'>
            <h3 className='text-danger'>{name.common}</h3>
            <div className='info'>
                <div className='image'>
                    <img src={flags.png} alt="" />
                </div>
                <div>
                    <p><small>Capital:</small> {capital ? capital[0] : 'Data Not Found'}</p>
                    <p><small>Language:</small> {languages ? (Object.values(languages)).slice(0, 2) : 'Undefined'}</p>
                    <p><small>Region:</small> {region}</p>
                    <p><small>Area:</small> {area}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;