import ReactStars from "react-rating-stars-component";
import React from 'react';


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
    rating: 3,
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
            <div className='reviews flex gap-5'>
                {reviews.map((review,index)=><div className="p-3 w-80 rounded-md shadow-md" key={index}>
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                    <ReactStars
                    count={5}
                    value={review.rating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />,
                    <p>{review.recommendation}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Review;