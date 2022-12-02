import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} cardTitle={"Opening hour"}></InfoCard>
            <InfoCard bgClass="bg-accent" img={marker} cardTitle={"Our Location"}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} cardTitle={"Contact Us"}></InfoCard>
        </div>
    );
};

export default Info;