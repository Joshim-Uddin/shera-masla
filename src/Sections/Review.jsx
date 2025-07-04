import React from 'react';
import ReactStars from "react-rating-stars-component";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Rating } from '@mui/material';


const Review = () => {
    const reviews = [
  {
    name: "John Doe",
    review: "Excellent service and very professional. Highly recommended!",
    rating: 5,
    recommendation: "Yes, I would definitely recommend this."
  },
  {
    name: "Jane Smith",
    review: "The experience was good, though there is room for improvement.",
    rating: 4,
    recommendation: "Yes, I would recommend this to others."
  },
  {
    name: "Ali Khan",
    review: "Average service, faced some delays.",
    rating: 3.5,
    recommendation: "Not sure if I would recommend this."
  },
  {
    name: "Emily Johnson",
    review: "Very poor communication and unsatisfactory results.",
    rating: 2,
    recommendation: "No, I would not recommend this."
  },
  {
    name: "Carlos Reyes",
    review: "Outstanding experience. Will definitely return again!",
    rating: 5,
    recommendation: "Absolutely! Highly recommended."
  }
];

    return (
        <div>
            <h2 className='my-8 bg-amber-600 py-3 text-center text-5xl font-semibold text-white'>সম্মানিত কাস্টমার এর রিভিউ</h2>
            <div className='reviews flex flex-wrap items-center justify-start gap-5 wrapper'>
                {reviews.map((review,index)=><div className="p-3 w-80 flex flex-col gap-5 min-h-72 rounded-md shadow-md" key={index}>
                    <h3 className='text-2xl font-semibold'>{review.name}</h3>
                    <p className='text-xl font-medium'>{review.review}</p>
                    <Rating 
                    readOnly
                    value={review.rating}
                    emptyIcon={<StarBorderIcon />}
                    icon={<StarIcon />}
                    precision={0.5}
                    size= 'sx'
                    />
                    <p className='text-lg font-medium'>{review.recommendation}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Review;