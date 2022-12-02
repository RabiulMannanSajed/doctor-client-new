import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimoials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Sajed',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, necessitatibus!',
            img: people1,
            location: 'Bangaldesh',
        },
        {
            _id: 2,
            name: 'Sayem',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, necessitatibus!',
            img: people2,
            location: 'Bangaldesh',
        },
        {
            _id: 3,
            name: 'lorem',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, necessitatibus!',
            img: people3,
            location: 'Bangaldesh',
        }
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials </h4>
                    <h2 className='text-3xl'>  what our patient says</h2>
                </div>
                <div>
                    <img src={quote} className='w-28 lg:w-48' alt="" />
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimoials;