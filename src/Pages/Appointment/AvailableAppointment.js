import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import OurService from './OurService';

const AvailableAppointment = ({ date }) => {
    const [services, setOurServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        // fetch('service.json') //coming from our clint site 
        // this is coming from our server site mongoDB 
        // to check our services goto the link (http://localhost:5000/service)
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setOurServices(data));
    })

    return (
        <div>
            <h4 className=' text-xl text-center text-secondary'>
                AvailableAppointment on {format(date, 'PP')}
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <OurService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></OurService>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;