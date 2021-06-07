import React from 'react';
import LaptopsListItems from './laptopsListItem/LaptopsListItems';
const LaptopsList = ({laptops}) => {
    return (
        <ul>
            {laptops.map(laptop => <LaptopsListItems laptop={laptop} key={laptop.id} />)}
        </ul>
    );
}

export default LaptopsList;