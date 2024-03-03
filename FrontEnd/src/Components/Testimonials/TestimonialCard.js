import React from 'react';
import EmptyUser from '../../Assets/EmptyUser.png';

const TestimonialCard = ({ singleTestimonial }) => {
    return (
        <div className="testimonial-box">

            {/* top */}
            <div className="box-top">

                <div className="profile">
                    <div className="profile-img">
                        <img src={EmptyUser} />
                    </div>
                    {/* Name and username */}
                    <div className="name-user">
                        <strong>{singleTestimonial.name}</strong>
                        <span>@lesegomhlongo</span>
                    </div>
                </div>

                <div className="reviews">
                    <p>My star section</p>
                </div>
            </div>

            {/* Comments */}
            <div className="client-comment">
                <p>{singleTestimonial.comment}</p>
            </div>

        </div>
    )
}

export default TestimonialCard