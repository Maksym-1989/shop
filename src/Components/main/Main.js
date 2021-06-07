import React from 'react';
import data from '../../data';
import Section from '../section/Section';
import LaptopsList from './laptopsList/LaptopsList';
import PhoneList from './phoneList/PhoneList';

const Main = () => {
    return (
        <main>
            <Section title="Мобильные телефоны">
                <PhoneList phones={data.phones} />
            </Section>
            <Section title="Ноутбуки">
                <LaptopsList laptops={data.laptops} />
            </Section>

        </main>
    );
}

export default Main;