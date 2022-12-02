import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-4'>
                <h3 className='text-xl text-primary py-3 font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-3'>Make an Appointment Today</h2>
                <p className=' text-white py-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, deleniti. Magni accusantium vitae aliquam blanditiis culpa! Doloribus, maiores laudantium! Consectetur repellendus corporis autem debitis, pariatur veritatis nemo, atque cumque dolor dolorum voluptate officia quibusdam nihil assumenda incidunt voluptates magni ullam.
                </p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;